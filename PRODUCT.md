# Product

<!-- impeccable:product-schema 1 -->

> Drafted from the three Flincth repositories (the Mac app's `spec.md` and
> `CLAUDE.md`, the extension's `spec.md` and `PRIVACY.md`, and this site).
> Lines marked **(to confirm)** are inferences the owner has not yet confirmed.

## Platform

web

## Users

- **Workspace Manager (Mac):** people who work across several apps and often several displays:
  developers, designers, content creators, video editors, traders, remote
  workers, owners of ultrawide or multi-monitor setups. They rebuild the same
  window arrangement by hand every time their work changes.
- **Split View (browser):** people who keep three or four sites side by side
  (dashboard, document, chat, video) and rebuild that arrangement in tabs and
  windows whenever they change context.
- **Speed Reader:** people who read a lot on iPhone and iPad (students,
  professionals, book lovers) and want to get through their own EPUB, PDF and
  DOCX files faster.
- **Site visitors today:** people deciding whether to install. Workspace
  Manager is on the Mac App Store; Split View is on the Chrome Web Store,
  Microsoft Edge Add-ons and Firefox Add-ons; Speed Reader is coming soon.

## Product Purpose

Flincth is a brand with several products, and more are coming on every
platform (more Mac apps, more iPhone and iPad apps, more browser extensions).
The home page introduces the brand and lists every product as an equal,
grouped by platform; each product has its own page at `/<platform>/<slug>`
(`_data/products.yml` is the catalogue). Today:

- **Flincth Workspace Manager** (`/mac/workspace-manager`): a sandboxed menu
  bar app. A *setup* chooses apps and keep/hide rules; switching setups places
  their windows into regions across displays and switches to that setup's own
  text clipboard history.
- **Flincth Split View** (`/browser/split-view/`, a page per browser): an
  extension that splits one tab into panes, puts a site in each, saves that as
  a workspace and switches workspaces with a click or shortcut. Its store
  listings still use the name "Flincth".
- **Flincth Speed Reader** (`/ios/speed-reader`, coming soon): an iPhone and
  iPad app that shows the user's own DRM-free documents one word, phrase or
  short sentence at a time (RSVP).

Success: visitors understand what each product does within seconds, find the
one for their platform, install the live ones, and ask to be told when a
coming one ships.

## Positioning

- **Brand:** small apps with a clear purpose. No account and no subscription
  in any product; each keeps the user's work on their own device and says
  plainly what it sends, if anything.
- **Workspace Manager:** one action changes the whole desk: which apps are open, where
  their windows sit across displays, and which clipboard history is active. No
  Accessibility permission, no account; setups and clipboard never leave the Mac
  (the only network use is opt-in feature announcements); windows move only
  through the user's own "Flincth Apply" Shortcut.
- **Split View:** one tab holds several sites, and a site that refuses to be
  embedded or needs a signed-in session runs as a real window lined up with its
  pane. No site access at install. Chrome and Edge (1.0.2+) then offer optional
  access to all websites, which can be skipped; Firefox asks one site at a time.
- **Speed Reader:** "Read faster, still understand": phrase and short-sentence
  modes besides one word at a time. No AI, no DRM-protected books.

## Operating Context

- Mac: menu bar, keyboard shortcuts, Apple Shortcuts, multiple displays,
  Mission Control desktops (which Flincth never crosses).
- Browser: the toolbar popup, the split-view tab, `chrome://extensions/shortcuts`
  and equivalents, the all-sites access offer (Chrome, Edge) and per-site
  permission prompts (Firefox).

## Capabilities and Constraints

- Workspace Manager: Mac App Store only; macOS 14+; US$9.99 one-time. No account, own server,
  subscription or trial. Only network use: opt-in new-feature announcements
  through OneSignal (push identifier and IP address; never setups or clipboard).
  Never write "no network access".
- Window placement needs the user-installed "Flincth Apply" Shortcut. Windows
  never cross Mission Control desktops and never enter or leave full screen.
- Speed Reader: iOS 17+, free with a one-time Pro purchase and a 7-day $0
  trial; documents stay on the device (and the user's iCloud with Pro sync);
  anonymous Firebase analytics, opt-in in the EU, UK and Switzerland. Never
  claim it collects no data. It cannot open DRM-protected books.
- Split View is live on the Chrome Web Store, Microsoft Edge Add-ons and
  Firefox Add-ons (Firefox 140+). It collects no data and makes no network requests of its own.
- Vocabulary: Workspace Manager says *setup* (code says workspace); Split View
  says *workspace*. Keep them apart on the site.
- The website itself uses consent-gated Google Analytics and opt-in OneSignal
  web push. Neither product does.

## Brand Commitments

- Name written `Flincth`; wordmark `flincth` in lower case next to the brand
  mark (`assets/flincth-mark.svg`: a white "f" and a dot on a blue rounded
  square). Products are named "Flincth <Product>".
- Each product keeps its own icon: `assets/app-icon*` (Workspace Manager),
  `assets/extension-icon*` (Split View), `assets/reader-icon*` (Speed Reader).
  The brand mark never stands in for a product icon, nor the reverse.
- Voice: calm, plain, honest about limits. Never implies a capability the
  product does not have.
- Dark navy theme with a single blue accent (see `DESIGN.md`).

## Evidence on Hand

- No real screenshots on the site yet: the previews are HTML/CSS
  illustrations and say so. The extension repo can capture a real walkthrough
  (`npm run shots`); the reader repo has simulator screenshots; the Mac app has
  none on hand.
- No testimonials, customer logos, press, ratings or usage numbers. Do not
  fabricate any.

## Product Principles

1. Say what it does and what it will not do, in the same breath.
2. Local by design: privacy is a property of the product, not a policy.
3. One clear action per page: "Download on the Mac App Store" for Workspace
   Manager, "Add to <browser>" for Split View, "Notify me at launch" for a
   product that is not out yet; on brand pages, the way to the product list.
4. Show the real product as soon as it can be shown; label every illustration.

## Accessibility & Inclusion

WCAG 2.2 AA: 4.5:1 text contrast, 24 px minimum targets, visible focus,
reduced motion honoured, every page usable without JavaScript.
