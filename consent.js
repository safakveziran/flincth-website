// Google Analytics with Consent Mode v2. The tag loads on every page, but what
// it may do depends on where the visitor is and what they chose:
// - EEA, UK, Switzerland and Türkiye: no cookie until the visitor accepts.
//   Until then Google receives only cookieless pings (no identifier), which
//   GA4 uses to model the traffic it cannot measure directly.
// - Everywhere else: measured with a cookie unless the visitor declines.
// The region comes from the device's time zone (Google's own region matching
// applied opt-in rules everywhere). Every Europe/* zone counts, which also
// covers the UK, Switzerland and Türkiye; an unknown zone is treated as opt-in.
// An explicit choice always wins.
(function () {
  var KEY = 'flincth-analytics-consent';
  var GA_ID = 'G-4JBS4T9RZ0';
  // EEA zones outside Europe/*: Atlantic islands, Cyprus, Svalbard and the
  // EU's outermost regions.
  var OPT_IN_ZONES = [
    'Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Faroe', 'Atlantic/Madeira',
    'Atlantic/Reykjavik', 'Africa/Ceuta', 'Asia/Nicosia', 'Asia/Famagusta',
    'Arctic/Longyearbyen', 'America/Cayenne', 'America/Guadeloupe',
    'America/Martinique', 'America/Marigot', 'Indian/Reunion', 'Indian/Mayotte'
  ];
  var banner, accept, decline, opener;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function remember(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* private mode */ }
  }

  function gtag() { window.dataLayer.push(arguments); }

  function optInRegion() {
    var zone;
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { /* old browser */ }
    if (!zone) return true;
    return zone.indexOf('Europe/') === 0 || OPT_IN_ZONES.indexOf(zone) !== -1;
  }

  function loadAnalytics(choice) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtag;
    // There is no advertising, so the ad signals stay denied everywhere.
    var never = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
    if (choice !== 'granted' && choice !== 'denied') choice = optInRegion() ? 'denied' : 'granted';
    gtag('consent', 'default', Object.assign({ analytics_storage: choice }, never));
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

  // Denying stops new cookies but leaves the ones already set; remove them.
  function clearCookies() {
    var host = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (pair) {
      var name = pair.split('=')[0].trim();
      if (name !== '_ga' && name.indexOf('_ga_') !== 0) return;
      ['', '; domain=' + host, '; domain=.' + host].forEach(function (domain) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + domain;
      });
    });
  }

  function close(choice) {
    remember(choice);
    banner.hidden = true;
    gtag('consent', 'update', { analytics_storage: choice });
    if (choice === 'denied') clearCookies();
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
