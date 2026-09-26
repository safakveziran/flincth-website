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
- `_includes/products-menu.html`: Products menu in the header (macOS, Chrome, Firefox, Edge)
- `_includes/head-meta.html`: Canonical, Open Graph and Twitter tags (title and description come from the page)
- `_includes/schema/home.en.html`: JSON-LD structured data for the home page
- `_includes/page-url.html`: Returns a page's URL in the current language (see Multi-language setup)
- `_includes/language-links.html`: Language switcher in the footer
- `_includes/lang-vars.html`, `_includes/page-body.html`: Per-language variables and the page body (header, content, footer, cookie banner)
- `_includes/not-found.html`, `_includes/language-picker-*.html`: Multi-language 404 page
- `_data/languages.yml`: Published languages; the first one is the default
- `_data/i18n/en.yml`: Copy for the shared parts
- `_config.yml`, `Gemfile`: Jekyll settings and the same versions GitHub Pages uses
- `index.html`: English home page content
- `styles.css`: Responsive design, reduced motion and keyboard focus styles
- `dark.css`: Dark theme for every page and every state of the interactive preview
- `script.js`: Code / Write / Research illustrative layout switcher
- `nav.js`: Closes the header's Products menu on an outside click or Escape
- `extension.js`: Workspace switcher in the browser extension pages' illustrative preview
- `consent.js`: Cookie consent banner and consent-gated Google Analytics loading
- `notifications.js`: OneSignal web push subscription (the Notifications link in the footer)
- `OneSignalSDKWorker.js`: OneSignal service worker (must stay at the site root)
- `privacy.html`: Privacy policy (app, browser extension and website covered separately)
- `chrome.html`, `firefox.html`, `edge.html`: Browser extension landing pages (see Browser extension pages)
- `support.html`: Support and common problems
- `404.html`: GitHub Pages error page
- `assets/og-image.png`: 1200×630 share image (`og:image`, `twitter:image`)
- `sitemap.xml`: Sitemap; generated automatically from pages that have a `sitemap` value, not edited by hand
- `robots.txt`, `llms.txt`: Search engine and assistant discovery
- `assets/app-icon.png`: App icon from the Flincth project (512 px source; `app-icon-64.png`, `-128`, `-192` are the sizes the pages load)
- `assets/og-extension.png`: 1200×630 share image for the browser extension pages (set with `og_image` in their front matter)
- `assets/extension-icon.png`: Extension icon from the Flincth browser extension project (`public/icons/icon128.png`)

## Product and design context

- `PRODUCT.md`: who the site is for, what each product does and what it must never claim (read by the Impeccable design skill).
- `DESIGN.md`: colours, type, spacing and the do's and don'ts of the current look.
- `.agents/product-marketing.md`: positioning, objections, voice and goals (read by the marketing skills).

None of them is published. Keep them true when the product or the look changes.

## Code language

All code, comments and documentation in this repository are written in English. The only exception is the site's translated content: translation files such as `_data/i18n/tr.yml` and translated pages contain text in their own language.

## Before release

The site was prepared for local delivery and has not been published. Because App Store approval has not been confirmed yet, “Coming to the Mac App Store” is shown instead of a store link. Replace it with the real store link at launch. Pricing is deliberately not stated.

The window visuals are not real app screenshots but interactive HTML/CSS illustrations, and the page says so. The keyboard shortcuts are examples too; users assign their own shortcuts in the app. Actual window placement requires the Flincth Apply shortcut.

The text describing app privacy is not a substitute for a legal privacy policy. Separate support and privacy pages should be prepared for the App Store.

There are no external font dependencies. The page loads the Google Analytics tag (GA4, measurement ID `G-4JBS4T9RZ0`); this tag downloads third-party JavaScript, uses cookies and makes network requests. This applies to the website only — the app itself still has no account, no server and no network access.

Cookie consent is handled by `consent.js`. No request is made to Google until the visitor accepts; a decline is remembered and not asked again. The choice is stored in `localStorage` under the `flincth-analytics-consent` key and can be changed with the “Cookies” link in the footer. The consent flow does not depend on an external cookie service.

## Browser extension pages

`/chrome`, `/firefox` and `/edge` introduce the Flincth browser extension, a separate product from the Mac app. The three pages share one template, `_includes/extension-landing.html`; each page file is only front matter (`browser`, `ref`, `strings`).

- Shared copy is in the `extension` section of `_data/i18n/<lang>.yml`; each browser's own copy (title, status, availability and shortcut answers) is in `extension_chrome`, `extension_firefox` and `extension_edge`. `[browser]` in a shared value is replaced with the browser's name.
- `_data/browsers.yml` lists the browsers in display order with their store links. While `store_url` is empty the page shows the status line ("Coming to the Chrome Web Store", "Planned for …") instead of an install button. When a listing goes live, set its `store_url` and update that browser's `status` and `availability_a` copy.
- On these pages the header menu points to the page's own sections.
- Every page reaches every product two ways: the Products menu in the header (`_includes/products-menu.html`, a `<details>` element that `nav.js` closes on an outside click or Escape) and the Products column in the footer. Both list macOS (the home page), Chrome, Firefox and Edge; names and notes are in the `products` section of the translation file. To add a product, add its `ref` to the list at the top of both includes and its keys to `products`.
- `_includes/schema/extension.html` produces each page's JSON-LD.
- When translating, copy the three page files into the language folder unchanged; all of their text comes from the translation file.

As of this writing the extension is built for Chrome only and not yet published; Firefox and Edge are planned (see `spec.md` §18 in the extension repository). Keep the pages' status copy in step with that.

## Before going live

The `support@flincth.com` address on `privacy.html` and `support.html` is a placeholder default. Before submitting to the App Store, make sure this address actually works or replace it with your own.

## Web notifications (OneSignal)

Web push is handled by `notifications.js`. It drives two kinds of control: the Notifications link in the footer (the whole subscription) and each product's **Notify me at launch** button (in the hero, the closing section and, on product pages, the header) (`_includes/notify-button.html`, `topic` = `mac`, `chrome`, `firefox` or `edge`). A button tags the subscription `launch_<topic>`, so a launch message can be sent in the OneSignal dashboard to a segment filtered on that tag. Where push is unsupported the buttons stay hidden and the "Coming to…" line marked `data-notify-fallback` shows instead. The button text, including the error state shown when OneSignal fails, is in the `notify` section of the translation file; the error itself is logged to the console. When a product launches, replace its button with the store link (for the extensions, set `store_url` in `_data/browsers.yml`). The App ID (`b1a1845c-01c6-4927-be28-07d290bed717`) is defined at the top of the file; the App ID is not a secret and is sent to the browser.

Things to check in the OneSignal dashboard:

1. The site URL must be `https://flincth.com` and "My site is not fully HTTPS" must not be checked.
2. Keep automatic prompts (slide prompt / native prompt) off; subscription starts only from the page's own buttons and the footer link.

`OneSignalSDKWorker.js` must stay at the site root; the service worker scope depends on it. OneSignal cannot place its own files on GitHub Pages, so this file is kept in the repository.

In browsers without push support (for example iOS Safari when the site is not added to the home screen) the Notifications link in the footer stays hidden and no OneSignal request is made.

Like analytics, this applies to the website only: the app itself still has no account, no server and no network access.

## Multi-language setup

The site is currently published in English only, but the infrastructure for adding a language is in place. The default language (the first entry in `_data/languages.yml`) lives at the root (`/privacy`); other languages are published in their own folder (`/tr/privacy`).

Every page has a `ref` key in its front matter (`home`, `privacy`, `support`). Versions of the same page in different languages share the same `ref`. From this match the templates generate:

- `hreflang` and `og:locale:alternate` tags; the default language becomes `x-default`
- The language switcher in the footer. It stays hidden while a page exists in only one language.
- Header and footer links that point to pages in the current language. If a page is not translated into that language yet, the link falls back to the default language's page instead of breaking.
- Every language version and its counterparts in `sitemap.xml`

### Adding a language (example: Turkish)

1. Add the language to `_data/languages.yml` (`code: tr`, `name: Türkçe`, `locale: tr_TR`, `dir: ltr`).
2. Add the folder's language to the `defaults` list in `_config.yml`: `- scope: { path: "tr" }` / `values: { lang: tr }`.
3. Copy `_data/i18n/en.yml` to `_data/i18n/tr.yml` and translate the values.
4. Copy the pages into the `tr/` folder and translate them: `tr/index.html`, `tr/privacy.html`, `tr/support.html`. Keep the `ref` values; translate `title`, `description` and the content.
5. In the home page copy, also translate:
   - The `#setup-data` block: the setup copy in the preview and the `{name} setup active` status. Keep the `{name}` placeholder.
   - The `schema` value: copy `_includes/schema/home.en.html` to `home.tr.html`, translate it, set `inLanguage` to `tr`, and write `schema: schema/home.tr.html` in `tr/index.html`.
6. Replace links inside the page content with that language's URLs; for example the `← Back to Flincth` link at the end of the privacy page should point to `/tr/`.
7. The 404 page needs nothing extra; its copy is in the `not_found` section of the file from step 3.

GitHub Pages serves only the root `404.html` for the whole site. That is why the 404 page carries every language in its own block and the browser decides which one to show: the language folder in the URL first (`/tr/missing-page` → Turkish), then the browser language, then the default language. Without JavaScript the default language shows. The languages that were not picked are removed from the page, so parts like the cookie banner appear only once.
