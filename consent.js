// Google Analytics with Consent Mode v2. The tag loads on every page, but what
// it may do depends on where the visitor is and what they chose:
// - EEA, UK, Switzerland and Türkiye: no cookie until the visitor accepts.
//   Until then Google receives only cookieless pings (no identifier), which
//   GA4 uses to model the traffic it cannot measure directly.
// - Everywhere else: measured with a cookie unless the visitor declines.
// Google resolves the region from the request; an explicit choice always wins.
(function () {
  var KEY = 'flincth-analytics-consent';
  var GA_ID = 'G-4JBS4T9RZ0';
  var OPT_IN_REGIONS = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
    'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
    'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH', 'TR'
  ];
  var banner, accept, decline, opener;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function remember(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
  }

  function gtag() { window.dataLayer.push(arguments); }

  function loadAnalytics(choice) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtag;
    // There is no advertising, so the ad signals stay denied everywhere.
    var never = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
    gtag('consent', 'default', Object.assign({ analytics_storage: 'denied', region: OPT_IN_REGIONS }, never));
    gtag('consent', 'default', Object.assign({ analytics_storage: 'granted' }, never));
    if (choice === 'granted' || choice === 'denied') {
      gtag('consent', 'update', { analytics_storage: choice });
    }
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(tag);
    gtag('js', new Date());
    gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
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
    gtag('consent', 'update', { analytics_storage: choice });
    if (opener) { opener.focus(); opener = null; }
  }

  function init() {
    var choice = stored();
    loadAnalytics(choice);

    banner = document.getElementById('consent');
    if (!banner) return;
    accept = document.getElementById('consent-accept');
    decline = document.getElementById('consent-decline');

    accept.addEventListener('click', function () { close('granted'); });
    decline.addEventListener('click', function () { close('denied'); });

    if (choice !== 'granted' && choice !== 'denied') open(null);

    // A page may offer more than one way back to this choice.
    var links = document.querySelectorAll('[data-consent-open]');
    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        open(link);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
