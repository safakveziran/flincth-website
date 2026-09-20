// Web push through OneSignal. Like analytics, nothing third-party is loaded
// until the visitor asks for it: the SDK is fetched on the first click of the
// "Notifications" link, and the browser's own permission prompt follows from
// that click rather than from page load.
(function () {
  var APP_ID = 'b1a1845c-01c6-4927-be28-07d290bed717';
  var SDK = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
  var links, sdkLoading = false;

  function supported() {
    return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  }

  function label(text) {
    Array.prototype.forEach.call(links, function (link) { link.textContent = text; });
  }

  // OneSignal's own queue: functions pushed here run once the SDK is ready, so
  // a click that arrives mid-download is not lost.
  function queue(fn) {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(fn);
  }

  function loadSdk() {
    if (sdkLoading) return;
    sdkLoading = true;
    queue(function (OneSignal) {
      OneSignal.init({
        appId: APP_ID,
        serviceWorkerPath: '/OneSignalSDKWorker.js',
        serviceWorkerParam: { scope: '/' },
        // The link below is the only invitation to subscribe. An automatic
        // slide-down on top of it would ask twice.
        promptOptions: { slidedown: { prompts: [] } }
      }).then(function () {
        OneSignal.User.PushSubscription.addEventListener('change', function (event) {
          reflect(event.current.optedIn);
        });
        reflect(OneSignal.User.PushSubscription.optedIn);
      });
    });
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = SDK;
    document.head.appendChild(tag);
  }

  function reflect(subscribed) {
    label(subscribed ? 'Notifications on' : 'Notifications');
  }

  function toggle() {
    loadSdk();
    queue(function (OneSignal) {
      if (OneSignal.User.PushSubscription.optedIn) {
        OneSignal.User.PushSubscription.optOut();
        return;
      }
      if (Notification.permission === 'granted') {
        // Permission survives an unsubscribe, so coming back needs no prompt.
        OneSignal.User.PushSubscription.optIn();
        return;
      }
      if (Notification.permission === 'denied') {
        // The browser will not ask again; only site settings can undo this.
        label('Notifications blocked');
        return;
      }
      OneSignal.Notifications.requestPermission();
    });
  }

  function init() {
    links = document.querySelectorAll('[data-notify-toggle]');
    if (!links.length) return;
    // Without an app id there is nothing to talk to, and an unconfigured link
    // would only lead to a dead end.
    if (!APP_ID || !supported()) {
      Array.prototype.forEach.call(links, function (link) { link.hidden = true; });
      return;
    }
    Array.prototype.forEach.call(links, function (link) {
      link.hidden = false;
      link.addEventListener('click', function (event) {
        event.preventDefault();
        toggle();
      });
    });
    // Already subscribed from an earlier visit? Then the SDK is worth loading
    // now, so the link can say so.
    if (Notification.permission === 'granted') loadSdk();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
