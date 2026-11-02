const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const source = fs.readFileSync('notifications.js', 'utf8');
const flush = () => new Promise(resolve => setImmediate(resolve));

function setup(permission = 'default', tags = {}) {
  const attrs = { 'data-notify-topic': 'new-apps', 'data-label-default': 'Subscribe',
    'data-label-subscribed': 'Subscribed', 'data-label-blocked': 'Blocked', 'data-label-error': 'Error' };
  const control = { tagName: 'BUTTON', textContent: 'Subscribe', hidden: true,
    getAttribute: key => attrs[key], setAttribute: (key, value) => { attrs[key] = value; },
    addEventListener: (_, fn) => { control.click = () => fn({ preventDefault() {} }); } };
  const Notification = { permission };
  let promptCount = 0, optOutCount = 0;
  const subscription = { optedIn: false, addEventListener() {},
    optIn() { this.optedIn = true; return Promise.resolve(); },
    optOut() { optOutCount++; this.optedIn = false; return Promise.resolve(); } };
  const sdk = { init: () => Promise.resolve(), User: { PushSubscription: subscription,
    getTags: () => ({ ...tags }), addTag: (key, value) => { tags[key] = value; },
    removeTag: key => { delete tags[key]; } },
    Notifications: { requestPermission() { promptCount++; Notification.permission = 'denied'; return Promise.resolve(); } } };
  const scripts = [];
  const window = { PushManager: {}, Notification, console: { error() {} } };
  const document = { readyState: 'complete',
    querySelectorAll: selector => selector === '[data-notify-toggle]' ? [control] : [],
    createElement: () => ({ remove() {} }), head: { appendChild: tag => scripts.push(tag) } };
  vm.runInNewContext(source, { window, document, navigator: { serviceWorker: {} }, Notification, Promise, console: window.console });
  return { control, attrs, sdk, scripts, subscription, tags,
    boot: async () => { const callbacks = window.OneSignalDeferred.splice(0); for (const cb of callbacks) await cb(sdk); await flush(); },
    prompts: () => promptCount, optOuts: () => optOutCount };
}

test('denied permission remains blocked and duplicate clicks do not prompt twice', async () => {
  const s = setup();
  s.control.click(); s.control.click();
  assert.equal(s.scripts.length, 1);
  assert.equal(s.control.disabled, true);
  await s.boot();
  assert.equal(s.prompts(), 1);
  assert.equal(s.control.textContent, 'Blocked');
  assert.equal(s.control.disabled, false);
});

test('existing permission can subscribe and refresh the button without a change event', async () => {
  const s = setup('granted'); await s.boot();
  s.control.click(); await flush();
  assert.equal(s.control.textContent, 'Subscribed');
  assert.equal(s.tags['launch_new-apps'], '1');
  s.control.click(); await flush();
  assert.equal(s.optOuts(), 1);
  assert.equal(s.control.textContent, 'Subscribe');
});

test('removing one topic preserves a subscription for another topic', async () => {
  const s = setup('granted', { 'launch_new-apps': '1', 'launch_speed-reader': '1' });
  s.subscription.optedIn = true; await s.boot();
  s.control.click(); await flush();
  assert.equal(s.optOuts(), 0);
  assert.equal(s.tags['launch_speed-reader'], '1');
  assert.equal(s.tags['launch_new-apps'], undefined);
});

test('SDK download failure releases controls and allows a clean retry', async () => {
  const s = setup(); s.control.click();
  s.scripts[0].onerror(); await flush();
  assert.equal(s.control.disabled, false);
  assert.equal(s.control.textContent, 'Error');
  s.control.click();
  assert.equal(s.scripts.length, 2);
  await s.boot();
  assert.equal(s.prompts(), 1);
});
