// Web push through OneSignal. Like analytics, nothing third-party is loaded
// until the visitor asks for it: the SDK is fetched on the first click of a
// notification control, and the browser's own permission prompt follows from
// that click rather than from page load.
//
// Two kinds of control carry data-notify-toggle:
// - the footer's "Notifications" link, which turns the whole subscription on
//   and off;
// - a product's "Notify me at launch" button, which also carries
//   data-notify-topic (mac, chrome, firefox, edge). Pressing it subscribes and
//   tags the subscription launch_<topic>, so a launch message can go only to
//   the people who asked about that product. Pressing it again removes the
//   tag, and removing the last tag ends the subscription.
// Elements marked data-notify-fallback (the "Coming to…" line in a hero) stand
// in for the button where push is not supported, and are hidden where it is.
(function () {
  var APP_ID = 'b1a1845c-01c6-4927-be28-07d290bed717';
  var SDK = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
  var TAG_PREFIX = 'launch_';
  var controls, sdkLoading = false;

  function supported() {
    return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  }

  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  function tagKey(control) {
    var topic = control.getAttribute('data-notify-topic');
    return topic ? TAG_PREFIX + topic : null;
  }

  // Each state's text comes from the control's data-label-* attributes, so
  // the templates can supply it in the page's language.
  function setState(control, state) {
    control.textContent = control.getAttribute('data-label-' + state) || control.textContent;
    if (control.tagName === 'BUTTON') control.setAttribute('aria-pressed', String(state === 'subscribed'));
  }

  // OneSignal's own queue: functions pushed here run once the SDK is ready, so
  // a click that arrives mid-download is not lost.
  function queue(fn) {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(fn);
  }

  function reflect(OneSignal) {
    var optedIn = OneSignal.User.PushSubscription.optedIn;
    var tags = OneSignal.User.getTags() || {};
    each(controls, function (control) {
      var key = tagKey(control);
      var on = optedIn && (!key || !!tags[key]);
      setState(control, on ? 'subscribed' : 'default');
    });
  }

  function loadSdk() {
    if (sdkLoading) return;
    sdkLoading = true;
    queue(function (OneSignal) {
      OneSignal.init({
        appId: APP_ID,
        serviceWorkerPath: '/OneSignalSDKWorker.js',
        serviceWorkerParam: { scope: '/' },
        // The page's own controls are the only invitation to subscribe. An
        // automatic slide-down on top of them would ask twice.
        promptOptions: { slidedown: { prompts: [] } }
      }).then(function () {
        OneSignal.User.PushSubscription.addEventListener('change', function () {
          reflect(OneSignal);
        });
        reflect(OneSignal);
      });
    });
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = SDK;
    document.head.appendChild(tag);
  }

  function hasLaunchTags(tags) {
    return Object.keys(tags).some(function (key) { return key.indexOf(TAG_PREFIX) === 0; });
  }

  function toggle(control) {
    loadSdk();
    queue(function (OneSignal) {
      var subscription = OneSignal.User.PushSubscription;
      var key = tagKey(control);
      var tags = OneSignal.User.getTags() || {};

      if (subscription.optedIn) {
        if (!key) {
          subscription.optOut();
        } else if (tags[key]) {
          OneSignal.User.removeTag(key);
          delete tags[key];
          if (!hasLaunchTags(tags)) subscription.optOut();
        } else {
          OneSignal.User.addTag(key, '1');
        }
        reflect(OneSignal);
        return;
      }

      if (Notification.permission === 'denied') {
        // The browser will not ask again; only site settings can undo this.
        setState(control, 'blocked');
        return;
      }
      // Tag first, so the subscription carries the product from its start.
      if (key) OneSignal.User.addTag(key, '1');
      if (Notification.permission === 'granted') {
        // Permission survives an unsubscribe, so coming back needs no prompt.
        subscription.optIn();
        return;
      }
      OneSignal.Notifications.requestPermission();
    });
  }

  function init() {
    controls = document.querySelectorAll('[data-notify-toggle]');
    if (!controls.length) return;
    // Without an app id there is nothing to talk to, and an unconfigured
    // control would only lead to a dead end. The fallbacks stay visible.
    if (!APP_ID || !supported()) {
      each(controls, function (control) { control.hidden = true; });
      return;
    }
    each(document.querySelectorAll('[data-notify-fallback]'), function (el) { el.hidden = true; });
    each(controls, function (control) {
      control.hidden = false;
      control.addEventListener('click', function (event) {
        event.preventDefault();
        toggle(control);
      });
    });
    // Already subscribed from an earlier visit? Then the SDK is worth loading
    // now, so the controls can say so.
    if (Notification.permission === 'granted') loadSdk();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
