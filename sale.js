// Limited-time deal (sale in _data/mac.yml). Pages carry the deal only when
// they were built during the sale; this removes every [data-sale-ends]
// element once its end time passes (or before its start), shows the regular
// price that [data-sale-after] holds in its place, and in the sale's last two
// days replaces the text of [data-sale-countdown] with its data-tomorrow or
// data-last string. Before that it keeps its "Limited time" text: the end
// date is never shown, so the deal does not read as one to come back for.
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
      if (days <= 1) c.textContent = c.dataset.last;
      else if (days === 2) c.textContent = c.dataset.tomorrow;
    }
  }
  if (ended) {
    for (const el of document.querySelectorAll("[data-sale-after]")) el.hidden = false;
  }
})();
