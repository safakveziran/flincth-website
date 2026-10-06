# Product

<!-- impeccable:product-schema 1 -->

> Drafted from the three Flincth repositories (the Mac app's `spec.md` and
> `CLAUDE.md`, the extension's `spec.md` and `PRIVACY.md`, and this site).
> Lines marked **(to confirm)** are inferences the owner has not yet confirmed.

## Platform

web

## Users

- **Mac app:** people who work across several apps and often several displays:
  developers, designers, content creators, video editors, traders, remote
  workers, owners of ultrawide or multi-monitor setups. They rebuild the same
  window arrangement by hand every time their work changes.
- **Browser extension:** people who keep three or four sites side by side
  (dashboard, document, chat, video) and rebuild that arrangement in tabs and
  windows whenever they change context.
- **Site visitors today:** people deciding whether to install. Flincth for Mac
  is on the Mac App Store; the browser extension is on the Chrome Web Store,
  Microsoft Edge Add-ons and Firefox Add-ons.

## Product Purpose

The site introduces two products and keeps interested visitors until launch. Flincth for Mac is the main product; the browser extension is a smaller companion and must never read as its equal:

- **Flincth for Mac:** a sandboxed menu bar app. A *setup* chooses apps and
  keep/hide rules; switching setups places their windows into regions across
  displays and switches to that setup's own text clipboard history.
- **Flincth for Chrome, Firefox and Edge:** an extension that splits one tab
  into panes, puts a site in each, saves that as a workspace and switches
  workspaces with a click or shortcut.

Success: visitors understand what each product does within seconds, install
Flincth for Mac from the Mac App Store, and ask to be told when the extension
ships.

## Positioning

- **Mac app:** one action changes the whole desk: which apps are open, where
  their windows sit across displays, and which clipboard history is active. No
  Accessibility permission, no account; setups and clipboard never leave the Mac
  (the only network use is opt-in feature announcements); windows move only
  through the user's own "Flincth Apply" Shortcut.
- **Extension:** one tab holds several sites, and a site that refuses to be
  embedded or needs a signed-in session runs as a real window lined up with its
  pane. No site access at install. Chrome and Edge (1.0.2+) then offer optional
  access to all websites, which can be skipped; Firefox asks one site at a time.

## Operating Context

- Mac: menu bar, keyboard shortcuts, Apple Shortcuts, multiple displays,
  Mission Control desktops (which Flincth never crosses).
- Browser: the toolbar popup, the split-view tab, `chrome://extensions/shortcuts`
  and equivalents, the all-sites access offer (Chrome, Edge) and per-site
  permission prompts (Firefox).

## Capabilities and Constraints

- Mac App Store only; macOS 14+; US$9.99 one-time. No account, own server,
  subscription or trial. Only network use: opt-in new-feature announcements
  through OneSignal (push identifier and IP address; never setups or clipboard).
  Never write "no network access".
- Window placement needs the user-installed "Flincth Apply" Shortcut. Windows
  never cross Mission Control desktops and never enter or leave full screen.
- The extension is live on the Chrome Web Store, Microsoft Edge Add-ons and
  Firefox Add-ons (Firefox 140+). It collects no data and makes no network requests of its own.
- Vocabulary: the Mac app says *setup* (code says workspace); the extension
  says *workspace*. Keep them apart on the site.
- The website itself uses consent-gated Google Analytics and opt-in OneSignal
  web push. Neither product does.

## Brand Commitments

- Name written `Flincth`; wordmark `flincth` in lower case next to the icon.
- Existing app icon (`assets/app-icon.png`) and extension icon
  (`assets/extension-icon.png`).
- Voice: calm, plain, honest about limits. Never implies a capability the
  product does not have.
- Dark navy theme with a single blue accent (see `DESIGN.md`).

## Evidence on Hand

- No real screenshots on the site yet: the previews are HTML/CSS
  illustrations and say so. The extension repo can capture a real walkthrough
  (`npm run shots`); the Mac app has none on hand.
- No testimonials, customer logos, press, ratings or usage numbers. Do not
  fabricate any.

## Product Principles

1. Say what it does and what it will not do, in the same breath.
2. Local by design: privacy is a property of the product, not a policy.
3. One clear action per page: "Download on the Mac App Store" for the Mac
   app, "Add to <browser>" for the extension where its store is live, "Notify me at
   launch" where it is not yet.
4. Show the real product as soon as it can be shown; label every illustration.

## Accessibility & Inclusion

WCAG 2.2 AA: 4.5:1 text contrast, 24 px minimum targets, visible focus,
reduced motion honoured, every page usable without JavaScript.
