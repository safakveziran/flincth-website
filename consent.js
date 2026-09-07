// Analytics runs only after the visitor accepts. Nothing is loaded before a
// choice is made, and no request goes out if the choice is "decline".
(function () {
  var KEY = 'flincth-analytics-consent';
  var GA_ID = 'G-4JBS4T9RZ0';
  var banner, accept, decline, opener, loaded = false;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function remember(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
  }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(tag);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function open(trigger) {
    opener = trigger || null;
    banner.hidden = false;
    // Only pull focus when the visitor asked for the banner. Grabbing it on
    // page load would move the caret out from under them for no reason.
    if (opener) banner.focus();
  }

  function close(choice) {
    remember(choice);
    banner.hidden = true;
    if (choice === 'granted') loadAnalytics();
    if (opener) { opener.focus(); opener = null; }
  }

  function init() {
    banner = document.getElementById('consent');
    if (!banner) return;
    accept = document.getElementById('consent-accept');
    decline = document.getElementById('consent-decline');

    accept.addEventListener('click', function () { close('granted'); });
    decline.addEventListener('click', function () { close('denied'); });

    var choice = stored();
    if (choice === 'granted') loadAnalytics();
    else if (choice !== 'denied') open(null);

    var link = document.getElementById('consent-open');
    if (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        open(link);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
