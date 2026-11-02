// Web push through OneSignal. Like analytics, nothing third-party is loaded
// until the visitor asks for it: the SDK is fetched on the first click of a
// notification control, and the browser's own permission prompt follows from
// that click rather than from page load.
//
// Two kinds of control carry data-notify-toggle:
// - the footer's "Notifications" link, which turns the whole subscription on
//   and off;
// - a product's "Notify me at launch" button, which also carries
//   data-notify-topic (speed-reader, chrome, firefox, edge, or new-apps for
//   news about any new Flincth app). Pressing it subscribes and
//   tags the subscription launch_<topic>, so a launch message can go only to
//   the people who asked about that product. Pressing it again removes the
//   tag, and removing the last tag ends the subscription.
// Elements marked data-notify-fallback (the "Coming to…" line in a hero, the
// header's "Launch status" link) stand in for the button where push is not
// supported, and are hidden where it is. On iPhone and iPad, where Safari
// offers push only from the Home Screen, data-notify-ios-hint explains how.
(function () {
  var APP_ID = 'b1a1845c-01c6-4927-be28-07d290bed717';
  var SDK = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
  var TAG_PREFIX = 'launch_';
  var controls, ready = null, changing = false;

  function supported() {
    return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  }

  function isAppleMobile() {
    // iPadOS reports itself as a Mac; touch support tells them apart.
    return /iPhone|iPad|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
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

  function getTags(OneSignal) {
    return (OneSignal.User.getTags && OneSignal.User.getTags()) || {};
  }

  function reflect(OneSignal) {
    var optedIn = OneSignal.User.PushSubscription.optedIn;
    var tags = getTags(OneSignal);
    each(controls, function (control) {
      var key = tagKey(control);
      var on = optedIn && (!key || !!tags[key]);
      setState(control, on ? 'subscribed' :
        (Notification.permission === 'denied' ? 'blocked' : 'default'));
    });
  }

  function loadSdk() {
    if (ready) return ready;
    ready = new Promise(function (resolve, reject) {
      var initialize = function (OneSignal) {
        return OneSignal.init({
          appId: APP_ID,
          safari_web_id: 'web.onesignal.auto.4d177f4c-af32-40a6-bcd9-e75371e6c146',
          notifyButton: { enable: false },
          welcomeNotification: { disable: true },
          autoResubscribe: false,
          serviceWorkerPath: '/OneSignalSDKWorker.js',
          serviceWorkerParam: { scope: '/' },
          // Permission is requested only through the site's own controls.
          promptOptions: { slidedown: { prompts: [] } }
        }).then(function () {
          OneSignal.User.PushSubscription.addEventListener('change', function () {
            reflect(OneSignal);
          });
          reflect(OneSignal);
          resolve(OneSignal);
        }).catch(reject);
      };
      queue(initialize);
      var tag = document.createElement('script');
      tag.async = true;
      tag.src = SDK;
      tag.onerror = function () {
        // Remove only this failed attempt, so a retry cannot initialize twice.
        window.OneSignalDeferred = window.OneSignalDeferred.filter(function (fn) {
          return fn !== initialize;
        });
        tag.remove();
        ready = null;
        reject(new Error('The notification service could not be loaded.'));
      };
      document.head.appendChild(tag);
    });
    return ready;
  }

  function hasLaunchTags(tags) {
    return Object.keys(tags).some(function (key) { return key.indexOf(TAG_PREFIX) === 0; });
  }

  function setBusy(busy) {
    changing = busy;
    each(controls, function (control) {
      control.setAttribute('aria-busy', String(busy));
      control.setAttribute('aria-disabled', String(busy));
      if (control.tagName === 'BUTTON') control.disabled = busy;
    });
  }

  function toggle(control) {
    if (changing) return;
    setBusy(true);
    loadSdk().then(function (OneSignal) {
      return change(OneSignal, control);
    }).catch(function (error) {
      setState(control, 'error');
      if (window.console) console.error('Flincth notifications:', error);
    }).then(function () { setBusy(false); });
  }

  function change(OneSignal, control) {
    var subscription = OneSignal.User.PushSubscription;
    var key = tagKey(control);
    var tags = getTags(OneSignal);

    if (subscription.optedIn) {
      if (!key) {
        return Promise.resolve(subscription.optOut()).then(function () { reflect(OneSignal); });
      } else if (tags[key]) {
        OneSignal.User.removeTag(key);
        delete tags[key];
        if (!hasLaunchTags(tags)) {
          return Promise.resolve(subscription.optOut()).then(function () { reflect(OneSignal); });
        }
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
      return Promise.resolve(subscription.optIn()).then(function () { reflect(OneSignal); });
    }
    return OneSignal.Notifications.requestPermission().then(function () {
      reflect(OneSignal);
    });
  }

  function init() {
    controls = document.querySelectorAll('[data-notify-toggle]');
    if (!controls.length) return;
    // Without an app id there is nothing to talk to, and an unconfigured
    // control would only lead to a dead end. The fallbacks stay visible.
    if (!APP_ID || !supported()) {
      each(controls, function (control) { control.hidden = true; });
      // On iPhone and iPad every browser is WebKit, and WebKit offers web
      // push only to Home Screen web apps (which is why the site has a
      // manifest). Tell those visitors how to get the button.
      if (APP_ID && isAppleMobile()) {
        each(document.querySelectorAll('[data-notify-ios-hint]'), function (el) { el.hidden = false; });
      }
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
    if (Notification.permission === 'granted') {
      loadSdk().catch(function () {
        each(controls, function (control) { setState(control, 'error'); });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
