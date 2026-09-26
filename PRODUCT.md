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
- **Site visitors today:** curious early adopters before launch. Neither
  product is released yet, so the visitor cannot buy or install anything.

## Product Purpose

The site introduces two products and keeps interested visitors until launch:

- **Flincth for Mac:** a sandboxed menu bar app. A *setup* chooses apps and
  keep/hide rules; switching setups places their windows into regions across
  displays and switches to that setup's own text clipboard history.
- **Flincth for Chrome, Firefox and Edge:** an extension that splits one tab
  into panes, puts a site in each, saves that as a workspace and switches
  workspaces with a click or shortcut.

Success before launch: visitors understand what each product does within
seconds and ask to be told when it ships. Success after launch: installs from
the Mac App Store and the browser stores.

## Positioning

- **Mac app:** one action changes the whole desk: which apps are open, where
  their windows sit across displays, and which clipboard history is active. No
  Accessibility permission, no account, no network access; windows move only
  through the user's own "Flincth Apply" Shortcut.
- **Extension:** one tab holds several sites, and a site that refuses to be
  embedded or needs a signed-in session runs as a real window lined up with its
  pane. No site access at install; permission is asked one site at a time.

## Operating Context

- Mac: menu bar, keyboard shortcuts, Apple Shortcuts, multiple displays,
  Mission Control desktops (which Flincth never crosses).
- Browser: the toolbar popup, the split-view tab, `chrome://extensions/shortcuts`
  and equivalents, per-site permission prompts.

## Capabilities and Constraints

- Mac App Store only; macOS 14+. No account, server, subscription, trial or
  network access. Pricing is not announced.
- Window placement needs the user-installed "Flincth Apply" Shortcut. Windows
  never cross Mission Control desktops and never enter or leave full screen.
- The extension is built for Chrome and not yet published; Firefox and Edge are
  planned. It collects no data and makes no network requests of its own.
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
3. One clear action per page; before launch that action is "tell me when it
   ships".
4. Show the real product as soon as it can be shown; label every illustration.

## Accessibility & Inclusion

WCAG 2.2 AA: 4.5:1 text contrast, 24 px minimum targets, visible focus,
reduced motion honoured, every page usable without JavaScript.
