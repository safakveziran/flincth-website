// Limited-time deal (sale in _data/mac.yml). Pages carry the deal only when
// they were built during the sale; this removes every [data-sale-ends]
// element once its end time passes (or before its start), shows the regular
// price that [data-sale-after] holds in its place, and writes the whole days
// left into [data-sale-countdown] from its data-days / data-last strings.
(() => {
  const now = Date.now();
  let ended = false;
  for (const el of document.querySelectorAll("[data-sale-ends]")) {
    const end = Date.parse(el.dataset.saleEnds);
    const start = Date.parse(el.dataset.saleStarts || "");
    if (Number.isNaN(end) || now >= end || now < start) {
      el.remove();
      ended = true;
      continue;
    }
    const days = Math.ceil((end - now) / 864e5);
    for (const c of el.querySelectorAll("[data-sale-countdown]")) {
      c.textContent = days <= 1 ? c.dataset.last : c.dataset.days.replace("[days]", days);
    }
  }
  if (ended) {
    for (const el of document.querySelectorAll("[data-sale-after]")) el.hidden = false;
  }
})();
