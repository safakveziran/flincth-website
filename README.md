# Flincth website: dark edition

This site is independent of the light theme. Dark navy surfaces, light text and blue accents are defined in `dark.css`. The original light-theme folder has not been changed.

The site is built with Jekyll. GitHub Pages does this on every publish; no extra setting or GitHub Action is needed. Pages are no longer complete HTML files on their own, so opening `index.html` directly in a browser does not work. To preview locally (requires Ruby):

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

The header, footer and cookie banner each live in one place; changing a link means editing one file once:

- `_layouts/default.html`: Shared skeleton for every page (`<head>`, header, footer, cookie banner). Pages set `layout: default`, `title` and `description` in the `---` block at the top and carry only their `<main>` content.
- `_includes/header.html`, `_includes/footer.html`, `_includes/consent.html`: Shared parts (the footer groups links into Products, Help and Legal)
- `_includes/products-menu.html`: Products menu in the header (every product, grouped by platform; see Products)
- `_includes/head-meta.html`: Canonical, Open Graph and Twitter tags (title and description come from the page)
- `_includes/schema/home.en.html`: JSON-LD for the home page (organization, website, product list); `workspace-manager.en.html`, `speed-reader.en.html` and `extension.html` are the product pages' own
- `_includes/page-url.html`: Returns a page's URL in the current language (see Multi-language setup)
- `_includes/language-links.html`: Language switcher in the footer
- `_includes/lang-vars.html`, `_includes/page-body.html`: Per-language variables and the page body (header, content, footer, cookie banner)
- `_includes/not-found.html`, `_includes/language-picker-*.html`: Multi-language 404 page
- `_data/languages.yml`: Published languages; the first one is the default
- `_data/i18n/en.yml`: Copy for the shared parts
- `_config.yml`, `Gemfile`: Jekyll settings and the same versions GitHub Pages uses
- `index.html`: English home page: the brand and every product, by platform
- `mac/workspace-manager.html`: Flincth Workspace Manager, the Mac app's page (it was the home page until the site became a brand site)
- `ios/speed-reader.html`: Flincth Speed Reader (coming soon); `reader.js` plays its reading preview
- `mac/index.html`, `ios/index.html`, `browser/index.html`: platform pages (`_layouts/platform.html`): product cards, then `about` paragraphs and `faq` from the page's front matter
- `_data/products.yml`, `_data/platforms.yml`, `_includes/product-card.html`: the product catalogue (see Products)
- `styles.css`: Responsive design, reduced motion and keyboard focus styles
- `dark.css`: Dark theme for every page and every state of the interactive preview
- `script.js`: Code / Write / Research illustrative layout switcher on the Workspace Manager page
- `nav.js`: Closes the header's Products menu on an outside click or Escape
- `extension.js`: Workspace switcher in the Split View pages' illustrative preview
- `consent.js`: Cookie consent banner and consent-gated Google Analytics loading
- `notifications.js`: OneSignal web push subscription (the Notifications link in the footer)
- `OneSignalSDKWorker.js`: OneSignal service worker (must stay at the site root)
- `manifest.webmanifest`: Web app manifest; iOS needs it to allow web push from the Home Screen
- `privacy.html`: Privacy policy (app, browser extension and website covered separately)
- `browser/split-view/index.html`, `chrome.html`, `firefox.html`, `edge.html`: Flincth Split View pages (see Browser extension pages)
- `support.html`: Support and common problems
- `guides/index.html`, `_guides/`, `_layouts/guide.html`, `_includes/extension-guides/`, `_data/guide_browsers.yml`: Step-by-step guides (see Guides)
- `404.html`: GitHub Pages error page
- `assets/og-brand.png`: 1200×630 share image for every page that sets no `og_image` (`og:image`, `twitter:image`); `assets/og-image.png` is Workspace Manager's and `assets/og-reader.png` Speed Reader's
- `assets/flincth-mark.svg`: the brand mark (two blue rounded cards joined at a corner like a hinge, with a dot at the pivot), with `flincth-mark-64.png` (transparent) and `-192`, `-512` (on the site's navy, for the Home Screen icon, the web app manifest and the JSON-LD logo); header, footer and favicon use the SVG
- `sitemap.xml`: Sitemap; generated automatically from pages that have a `sitemap` value, not edited by hand. Each page's `sitemap.lastmod` is written by hand: update it in the same commit whenever the page's own content changes, or search engines learn to ignore it
- `robots.txt`, `llms.txt`: Search engine and assistant discovery (`llms.txt` is rendered by Jekyll for the price and the Comparisons list)
- `assets/app-icon.png`: Workspace Manager's app icon from the Flincth project (512 px source; `app-icon-64.png`, `-128`, `-192` are the sizes the pages load)
- `assets/reader-icon-64.png`, `-128`, `-192`: Speed Reader's app icon from the flincth-reader project (`Resources/Assets.xcassets/AppIcon.appiconset/reader-icon.png`, corners rounded for the web)
- `assets/og-extension.png`: 1200×630 share image for the browser extension pages (set with `og_image` in their front matter)
- `assets/extension-icon.png`: Split View's icon from the Flincth browser extension project (`public/icons/icon128.png`), with `extension-icon-64.png` and `-128`

## Products

Flincth is a brand with several products, and every page belongs either to one product or to none (the home page, the platform pages, privacy, support, guides list, blog list).

- `_data/products.yml` lists every product in order: its `id` (also its page's `ref`), `platform`, icon, `status` (`live` or `coming`) and where its store link lives. `_data/platforms.yml` lists the platforms (`mac`, `ios`, `browser`); each has a page at `/<id>/`.
- Product names, short names, menu notes, the searchable category line, the card description and the small print are in `catalog` in `_data/i18n/<lang>.yml`; platform names in `platforms`.
- A product's page sets `ref: <id>` and `product: <id>`. Any other page about one product (its comparisons, guides and blog posts) sets `product: <id>` too; Mac guides and blog posts get `product: workspace-manager` from `_config.yml`. The header then links to that product page's Features, How it works and FAQ, and its button follows the product (store, browser choice, or "Notify me at launch"). Pages with no product get Guides, Blog and Support and an "All products" button.
- The home page, the platform pages, the Products menu, the footer, `llms.txt` and the home page's JSON-LD all read the catalogue, so they need no change for a new product.
- Product pages live at `/<platform>/<slug>` (`/mac/workspace-manager`, `/ios/speed-reader`, `/browser/split-view/`). Earlier addresses that moved are kept with `redirect_from` (`/chrome`, `/firefox`, `/edge`).

To add a product: add it to `_data/products.yml` and to `catalog` in the translation file, add its icon in three sizes (`<icon>-64.png`, `-128`, `-192`), write its page with `ref` and `product` set to its id (and a JSON-LD include if it needs one), give `product-card.html` a motif for it, add its section to `privacy.html`, `support.html` and `llms.txt`, and update `PRODUCT.md` and `.agents/product-marketing.md`. A product that is not out yet has `status: coming` and a `notify` topic; switch it to `live` with its store link at launch.

## Product and design context

- `PRODUCT.md`: who the site is for, what each product does and what it must never claim (read by the Impeccable design skill).
- `DESIGN.md`: colours, type, spacing and the do's and don'ts of the current look.
- `.agents/product-marketing.md`: positioning, objections, voice and goals (read by the marketing skills).

None of them is published. Keep them true when the product or the look changes.

## Code language

All code, comments and documentation in this repository are written in English. The only exception is the site's translated content: translation files such as `_data/i18n/tr.yml` and translated pages contain text in their own language.

## Release notes

Flincth Workspace Manager is live on the Mac App Store. Its link lives in one place, `_data/mac.yml` (`store_url`, without a country code so Apple routes each visitor to their own storefront); its page's buttons, its product card, the header CTA on its pages and the JSON-LD read it from there, and so does `llms.txt`.

The US price is set once, as `price` in `_data/mac.yml` (a quoted string with two decimals). `llms.txt` and the comparison pages read it from there and print it with `_includes/usd.html`, which always shows two decimals and also formats sums. Changing the price means editing that one line.

### Search engines

- **Sitemaps.** `robots.txt` lists `sitemap.xml` and the blog feed `blog/feed.xml`. Google reads a submitted sitemap on its own schedule; after adding pages, resubmit both in Search Console (Sitemaps) to have them read straight away.
- **IndexNow.** `.github/workflows/indexnow.yml` runs after every GitHub Pages build (`page_build`) and sends the URLs whose sitemap `lastmod` is within the last three days to IndexNow, which Bing, Yandex, Seznam and Naver share. The key is the file `782a19638f1194e135120e3a823d5ff0.txt` at the site root; it is public by design and must stay in place. To resend every URL, run the workflow by hand from the Actions tab with **all** ticked. Google does not use IndexNow.
- **Descriptions.** Keep every page's `description` between 25 and 160 characters; Bing Webmaster Tools reports longer ones as an error, and search results cut them off.
- **Titles.** Keep every `<title>` at 60 characters or fewer; search results cut longer ones. Pages set it with `title`. Posts and guides show `title` as their heading and may set a shorter `seo_title` for the `<title>`; ` | Flincth` is added only when the result still fits in 60 characters.
- **Redirects.** GitHub Pages cannot send server redirects, so moved pages use `redirect_from`, which leaves a page with an instant refresh, a canonical link to the new address and `noindex`. Search engines treat it as a permanent move. Never link to an old address from the site itself; link to the new one.
- **Verification.** Yandex Webmaster and Bing Webmaster Tools codes go in `verification:` in `_config.yml`; the head then carries their meta tags. Google Search Console is verified through DNS. Bing has no code yet: the quickest way in is Bing Webmaster Tools → **Import from Google Search Console**, which verifies the site and copies its sitemaps without a code; otherwise choose the meta tag method and paste its `content` value into `verification.bing`.

### Blog

Posts live in `_posts/` as `YYYY-MM-DD-slug.md` with `title` and `description` in their front matter (plus `updated: YYYY-MM-DD` after a substantive edit). They use `_layouts/post.html`, are served at `/blog/<slug>`, and are listed on `/blog/` (`blog/index.html`), in `sitemap.xml`, in `llms.txt` and in the feed at `/blog/feed.xml` (`jekyll-feed`, part of GitHub Pages). The footer links to the blog.

**Medium.** Medium no longer issues API tokens (since 1 January 2025), so posts cannot be pushed there automatically. The site is the original; Medium gets a copy that points back:

1. Publish the post here and wait until it is live.
2. On Medium, use **Import a story** (https://medium.com/p/import) with the post's flincth.com address. Medium copies it and sets the story's canonical link to flincth.com, so search engines credit the site.
3. Add the Medium address to the post as `medium_url:`. The post then shows an "Also on Medium" link.

A story that appeared on Medium before the site (the first one did) should get the same canonical link by hand: on Medium open the story's **More settings → Advanced settings → Customize canonical link** and enter the flincth.com address.

### Guides

Step-by-step guides live in `_guides/<platform>/` (a Jekyll collection, served at `/guides/<platform>/<slug>`), with `title`, `description`, `order` (their place in their list), `updated: YYYY-MM-DD` and `platform` (`mac`, `chrome`, `firefox` or `edge`) in their front matter. They use `_layouts/guide.html`. Update `updated` whenever a guide's steps change, so IndexNow resends it.

- `/guides/` (`guides/index.html`) shows one box per platform from `_data/guide_platforms.yml`, Mac first. Each box opens that platform's own list, `guides/<platform>/index.html` (`_layouts/guide-list.html`). A guide's back link and its "More guides" stay within its platform.
- Guides are also listed in `sitemap.xml` (lastmod is `updated`), in `llms.txt` and, through `/guides/`, in the footer's Help column.
- **Browser extension** guides are written once per browser, with `product: split-view` and `store_browser: <id>` (the header then installs that browser's extension). Each file holds only front matter and one include from `_includes/extension-guides/`, which carries the shared text; what differs per browser (store, toolbar pinning, the website-access model, extension settings paths, whether attached windows follow the browser) comes from `_data/guide_browsers.yml`. A new browser is one entry there and in `_data/guide_platforms.yml`, a list page and six files. Each browser's own two-tab split feature (`native_name`, `native_how`) feeds the "three or more panes" guide; check that wording when a browser updates.
- Earlier guide URLs (`/guides/<slug>` for the Mac guides and the first generic extension guides) redirect to their current addresses through `redirect_from` (`jekyll-redirect-from`).

Guides name each product's own menus and buttons (Workspace Manager…, Add Area, FlincthApply v2 in the Mac app; New workspace, Open as a window, Shortcuts that work anywhere in the extension). They were checked against each product's source and `spec.md`; when an interface changes, check its guides in the same release. The extension guides describe Chrome and Edge 1.0.2's all-sites access and Firefox's per-site access (`access` in `_data/guide_browsers.yml`); update that when the model changes.

### Comparison pages

Pages such as `magnet-alternative.html`, `rectangle-alternative.html`, `raycast-alternative.html`, `moom-alternative.html`, `maccy-alternative.html`, `paste-alternative.html`, `divvy-alternative.html` and `cinch-alternative.html` compare Flincth with a competitor. They use `layout: comparison` (`_layouts/comparison.html`, which documents every front matter key) and hold only front matter: the competitor's key in `_data/competitors.yml`, the headline, the table rows and the FAQ. The Flincth card, the four reasons to switch, the shared questions and the closing call to action live in the layout. A new comparison is one new file. They set `comparison: true` in their front matter and are reachable only from `sitemap.xml` and `llms.txt`, which lists every such page automatically. Never link them from the header, footer or any other page. Like every page they are addressed without `.html` (`/magnet-alternative`). Browser extension comparisons (`tab-resize-alternative.html`, `dualless-alternative.html`, `split-screen-for-chrome-alternative.html`, `workona-alternative.html`, `chrome-split-view-alternative.html`) work the same way with `layout: extension-comparison`, plus `product: extension` (which groups them separately in `llms.txt`) and `store_browser: chrome` (which makes the header button install the extension). Competitor prices and the date they were checked live in `_data/competitors.yml`; re-check them at least once a quarter.

The window visuals are not real app screenshots but interactive HTML/CSS illustrations, and the page says so. The keyboard shortcuts are examples too; users assign their own shortcuts in the app. Actual window placement requires the Flincth Apply shortcut.

The text describing app privacy is not a substitute for a legal privacy policy. Separate support and privacy pages should be prepared for the App Store.

There are no external font dependencies. The page loads the Google Analytics tag (GA4, measurement ID `G-4JBS4T9RZ0`); this tag downloads third-party JavaScript, uses cookies and makes network requests. This applies to the website only — the app itself has no account and no server of its own, and its only network use is the optional in-app announcements described in `privacy.html`.

Cookie consent is handled by `consent.js`. No request is made to Google until the visitor accepts; a decline is remembered and not asked again. The choice is stored in `localStorage` under the `flincth-analytics-consent` key and can be changed with the “Cookies” link in the footer. The consent flow does not depend on an external cookie service.

## Browser extension pages

`/browser/split-view/chrome`, `/browser/split-view/firefox` and `/browser/split-view/edge` introduce Flincth Split View, the Flincth browser extension (its store listings still say "Flincth"). They share one template, `_includes/extension-landing.html`; each page file is only front matter (`browser`, `ref: split-view-<browser>`, `strings`). `/browser/split-view/` is a short overview for every browser (`_includes/split-view-hub.html`, copy in `extension_any`, `hub: true` so the header lists the browser pages): it is worded differently from the browser pages on purpose, so search engines do not see four copies of one page. Both use the preview in `_includes/split-view-preview.html`. The browser pages used to live at `/chrome`, `/firefox` and `/edge`; those addresses redirect (`redirect_from`), and the pages set `permalink` so the redirect lands on the address without `.html`. Future extensions get their own `/browser/<slug>/` pages.

- Shared copy is in the `extension` section of `_data/i18n/<lang>.yml`; each browser's own copy (title, status, availability and shortcut answers) is in `extension_chrome`, `extension_firefox` and `extension_edge`, and the overview's in `extension_any`. `[browser]` in a shared value is replaced with the browser's name.
- `_data/browsers.yml` lists the browsers in display order with their store links. While `store_url` is empty the page shows the status line ("Coming to the Chrome Web Store", "Coming to Firefox Add-ons", …) instead of an install button. When a listing goes live, set its `store_url` and update that browser's `status`, `availability_q` and `availability_a` copy (see `extension_edge` for the live wording). The hero, the closing section and the header CTA then link to the store, and the page's JSON-LD gains the store link.
- On these pages the header menu points to the page's own sections.
- Every page reaches every product two ways: the Products menu in the header (`_includes/products-menu.html`, a `<details>` element that `nav.js` closes on an outside click or Escape) and the Products column in the footer. Both list every product under its platform; Split View also lists its browser pages in the menu. To add a browser, add it to `_data/browsers.yml`, its name to `products` and its `extension_<id>` copy to the translation file, and a page `browser/split-view/<id>.html`.
- `_includes/schema/extension.html` produces each page's JSON-LD.
- When translating, copy the three page files into the language folder unchanged; all of their text comes from the translation file.

As of this writing the extension is live on the Chrome Web Store, Microsoft Edge Add-ons and Firefox Add-ons (Firefox 140 or later; see `docs/publishing-to-firefox-and-edge.md` in the extension repository). Keep the pages' status copy in step with that.

## Before going live

The `support@flincth.com` address on `privacy.html` and `support.html` is a placeholder default. Before submitting to the App Store, make sure this address actually works or replace it with your own.

## Web notifications (OneSignal)

Web push is handled by `notifications.js`. It drives two kinds of control: the Notifications link in the footer (the whole subscription) and each product's **Notify me at launch** button (in the hero, the closing section, its product card and the header) (`_includes/notify-button.html`, `topic` = `speed-reader` today, `chrome`, `firefox` or `edge` while an extension store is not live, and `new-apps` for the home page's "Tell me about new apps"). Live products link to their store instead. A button tags the subscription `launch_<topic>`, so a launch message can be sent in the OneSignal dashboard to a segment filtered on that tag. Where push is unsupported the buttons stay hidden and the "Coming to…" line marked `data-notify-fallback` shows instead. The button text, including the error state shown when OneSignal fails, is in the `notify` section of the translation file; the error itself is logged to the console. When a product launches, replace its button with the store link (for the extensions, set `store_url` in `_data/browsers.yml`). The App ID (`b1a1845c-01c6-4927-be28-07d290bed717`) is defined at the top of the file; the App ID is not a secret and is sent to the browser.

Things to check in the OneSignal dashboard:

1. The site URL must be `https://flincth.com` and "My site is not fully HTTPS" must not be checked.
2. Keep automatic prompts (slide prompt / native prompt) off; subscription starts only from the page's own buttons and the footer link.

`OneSignalSDKWorker.js` must stay at the site root; the service worker scope depends on it. OneSignal cannot place its own files on GitHub Pages, so this file is kept in the repository.

In browsers without push support the notification controls stay hidden and no OneSignal request is made. On iPhone and iPad every browser (Safari, Chrome and the rest) is WebKit, which offers web push only to sites opened from the Home Screen; the closing section tells those visitors so. That path needs `manifest.webmanifest` with `"display": "standalone"`, which the layout links on every page.

Like analytics, this applies to the website only: the app itself has no account and no server of its own, and its only network use is its optional in-app announcements (see `privacy.html`).

## Multi-language setup

The site is currently published in English only, but the infrastructure for adding a language is in place. The default language (the first entry in `_data/languages.yml`) lives at the root (`/privacy`); other languages are published in their own folder (`/tr/privacy`).

Every page has a `ref` key in its front matter (`home`, `privacy`, `support`, `workspace-manager`, `split-view-chrome`, `mac`, …). Versions of the same page in different languages share the same `ref`. From this match the templates generate:

- `hreflang` and `og:locale:alternate` tags; the default language becomes `x-default`
- The language switcher in the footer. It stays hidden while a page exists in only one language.
- Header and footer links that point to pages in the current language. If a page is not translated into that language yet, the link falls back to the default language's page instead of breaking.
- Every language version and its counterparts in `sitemap.xml`

### Adding a language (example: Turkish)

1. Add the language to `_data/languages.yml` (`code: tr`, `name: Türkçe`, `locale: tr_TR`, `dir: ltr`).
2. Add the folder's language to the `defaults` list in `_config.yml`: `- scope: { path: "tr" }` / `values: { lang: tr }`.
3. Copy `_data/i18n/en.yml` to `_data/i18n/tr.yml` and translate the values.
4. Copy the pages into the `tr/` folder and translate them: `tr/index.html`, `tr/mac/workspace-manager.html`, `tr/ios/speed-reader.html`, the platform pages, `tr/privacy.html`, `tr/support.html`. Keep the `ref` values; translate `title`, `description` and the content. The Split View page files are copied unchanged (their copy is in the translation file).
5. Also translate:
   - In `mac/workspace-manager.html`, the `#setup-data` block: the setup copy in the preview and the `{name} setup active` status. Keep the `{name}` placeholder. In `ios/speed-reader.html`, the `#reader-data` block.
   - The `schema` values: copy `_includes/schema/home.en.html` (and the product pages' `*.en.html`) to `*.tr.html`, translate them, set `inLanguage` to `tr`, and point each `tr/` page's `schema` at its copy.
6. Replace links inside the page content with that language's URLs; for example the `← Back to Flincth` link at the end of the privacy page should point to `/tr/`.
7. The 404 page needs nothing extra; its copy is in the `not_found` section of the file from step 3.

GitHub Pages serves only the root `404.html` for the whole site. That is why the 404 page carries every language in its own block and the browser decides which one to show: the language folder in the URL first (`/tr/missing-page` → Turkish), then the browser language, then the default language. Without JavaScript the default language shows. The languages that were not picked are removed from the page, so parts like the cookie banner appear only once.
