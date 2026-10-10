# Product Marketing Context

**Document version:** v11
**Last updated:** 2026-10-10

> Auto-drafted from the Flincth repositories. Items marked **(to confirm)** are
> inferences waiting for the owner's review; everything else is taken from the
> product specs or the site.

## Product Overview
**One-liner (brand):** Small apps. Clear purpose. Focused tools for Mac, iPhone, iPad and the browser, each clear about its price and its data. Pricing and privacy claims belong to each product, never to the brand.
**What it does:**
- *Flincth Workspace Manager* (Mac, /mac/workspace-manager) is a menu bar app. Each setup chooses which apps are part of
  a kind of work; switching setups places their windows into regions across
  your displays and switches to that setup's own text clipboard history.
- *Flincth Split View* (Chrome, Firefox and Edge, /browser/split-view/) splits one browser tab into
  panes, puts a site in each, saves that as a workspace and switches workspaces
  with a click or shortcut. Its store listings still say "Flincth".
- *Flincth Speed Reader* (iPhone and iPad, /ios/speed-reader, coming soon) shows the user's own
  DRM-free documents one word, phrase or short sentence at a time (RSVP).
**Product hierarchy:** Flincth is a brand with several products, more to come on every platform.
The home page lists every product as an equal, grouped by platform (/mac/, /ios/, /browser/);
`_data/products.yml` is the catalogue.
**Product category:** Mac window manager / clipboard manager; browser split-screen
and tab workspace extension; iPhone and iPad speed reading (RSVP) app.
**Search terms the pages target (Google autocomplete, 2026-10-10; no volume data):**
brand: "productivity apps for mac", "mac and iphone apps", "focused apps"
(not "without subscription": future products may have other models); Mac: "window manager mac", "clipboard manager mac",
"best menu bar apps mac"; iOS: "speed reading app iphone/ipad", "rsvp reader app",
"epub speed reading app ios", "speed reading app one word at a time"; browser:
"chrome extension split screen", "split view", "split tabs".
**Product type:** Paid-or-free consumer utility software, sold through app stores. **(to confirm)**
**Business model:** set per product; the brand promises no model. Today: Workspace Manager: Mac App Store, US$9.99 one-time,
no in-app purchase or trial. Split View: free. Speed Reader: free download with daily limits, one-time
Pro purchase, 7-day $0 trial.

## Target Audience
**Target users:** individual professionals on a Mac, often with two or more
displays or an ultrawide; heavy browser users who keep several sites open side by side.
**Primary use case:** switching between kinds of work without rearranging windows by hand.
**Jobs to be done:**
- "When I start coding / writing / a meeting, put my apps where they belong."
- "Keep the snippets I copied for this project apart from everything else."
- "Let me watch my dashboard, doc and chat at once without juggling tabs."
**Use cases:**
- Developer: editor, terminal and browser docs across two displays.
- Writer: editor and references, with the research clipboard kept separate.
- Operator / trader: dashboards and chat in one split tab.

## Personas
Not B2B; single user decides and uses.

## Problems & Pain Points
**Core problem:** every context switch means rebuilding the same window or tab
arrangement by hand, and the clipboard fills with snippets from unrelated work.
**Why alternatives fall short:**
- Tiling window managers keep rearranging windows and often need Accessibility access.
- Snap tools place one window at a time; they do not restore a whole desk.
- Browser tab groups keep tabs together but still show one site at a time.
**What it costs them:** minutes per switch, lost focus, pasted-the-wrong-thing mistakes.
**Emotional tension:** a cluttered desk that never matches the work at hand. **(to confirm)**

## Competitive Landscape  **(to confirm: named from category knowledge, not research)**
**Direct (Mac):** Rectangle, Magnet, Moom (window snapping and layouts);
Paste, Maccy (clipboard managers). Each solves one half.
**Secondary:** Raycast window management and clipboard history; Stage Manager.
**Indirect:** arranging windows by hand; Mission Control desktops per task.
**Direct (browser):** split-screen and tab-layout extensions; Edge and Arc split view.

## Differentiation
**Key differentiators:**
- Window layout and clipboard history switch together, per setup.
- No Accessibility permission, no account; setups and clipboard never leave the Mac (only network use: opt-in feature announcements); sandboxed, Mac App Store only.
- Applies a layout once when you switch, then leaves your windows alone.
- Extension: sites that refuse embedding run as real windows aligned to the pane;
  no site permissions at install (Chrome and Edge then offer optional all-sites
  access; Firefox asks per site).
**Why that's better:** one action changes the whole desk, and nothing watches
your screen or leaves your Mac.

## Objections
| Objection | Response |
|-----------|----------|
| "Why do I need a Shortcut?" | It is how a sandboxed app moves windows without Accessibility access; the app walks you through installing it once. |
| "Is it a tiling window manager?" | No. It applies your layout when you switch and then leaves windows alone. |
| "Can it move windows between desktops or into full screen?" | No. No app can do that through supported APIs; Flincth says so up front. |
| "Does my clipboard leave my Mac?" | No. Setups and clipboard are never sent anywhere; the app only goes online for optional feature announcements. |
| Extension: "Why does it ask for website access?" | Only to show sites inside Flincth's own tab. Chrome and Edge ask once for all websites, which can be skipped; Firefox asks one site at a time. |

**Anti-persona:** people who want windows auto-tiled continuously, or cross-desktop automation.

## Switching Dynamics
**Push:** rebuilding layouts by hand every day; clipboard noise.
**Pull:** one keystroke to a ready desk; privacy by design.
**Habit:** existing snap tools and muscle memory.
**Anxiety:** installing a Shortcut; losing current window arrangement (answered by "Not Flincth", which restores the desk as it was).

## Customer Language
No verbatim customer quotes yet. Do not invent them.
**Words to use:** setup (Mac), workspace (extension), layout, region, placement,
clipboard history, menu bar, pane, split view.
**Words to avoid:** "tiling", "automates everything", "AI", anything implying
windows cross Mission Control desktops or enter full screen.
**Glossary:**
| Term | Meaning |
|------|---------|
| Setup | Mac: a named selection of apps and keep/hide rules |
| Layout | Mac: how displays are divided into regions |
| Placement | Mac: the region an app's windows go to |
| Workspace | Extension: a saved split of one tab into panes with sites |
| Flincth Apply | The user-installed Shortcut that moves windows |

## Brand Voice
**Tone:** calm, warm, plain.
**Style:** short sentences; states limits honestly; no hype words.
**Personality:** tidy, trustworthy, understated, quietly clever.

## Proof Points
None yet (pre-launch). Collect beta testers' words before adding testimonials.
**Value themes:**
| Theme | Proof |
|-------|-------|
| Local by design | No account, analytics or own server; setups and clipboard never leave the Mac (Mac); no data collected (extension) |
| Honest limits | Site and support page state every platform limit |

## Goals
**Business goal:** Mac App Store installs of Flincth Workspace Manager (live at https://apps.apple.com/app/flincth-workspace-manager/id6809227474?mt=12); a launch audience for the browser extension stores.
**Conversion action (Mac):** download from the Mac App Store.
**Conversion action (extension):** install from the browser's store (Chrome, Edge, Firefox).
**Conversion action (Speed Reader, before launch):** "Notify me at launch" (OneSignal tag launch_speed-reader).
**Conversion action (home):** open a product page; "Tell me about new apps" (tag launch_new-apps).
**Current metrics:** unknown; GA4 is consent-gated. **(to confirm)**

## Changelog
*Newest first. One line per revision: what changed and why.*
- v11 (2026-10-10) — Brand pages stop promising "no subscription" / "no account": future products may use other models, so those claims live on product pages only.
- v10 (2026-10-10) — Flincth becomes a multi-product brand: brand home page, /mac/workspace-manager, /browser/split-view/ (the extension is named Split View), /ios/speed-reader (coming soon); products are equals.
- v9 (2026-10-06) — Extension 1.0.2 website access recorded: Chrome and Edge offer optional all-sites access after install; Firefox still asks per site.
- v8 (2026-10-03) — Extension live on Firefox Add-ons (https://addons.mozilla.org/addon/flincth/); now in all three stores.
- v7 (2026-09-30) — Price set (US$9.99 one-time); "no network access" replaced, since the app has opt-in OneSignal feature announcements.
- v6 (2026-09-28) — Extension live on the Chrome Web Store (https://chromewebstore.google.com/detail/flincth/blkacdknkggnilgkmlmjemacfmnmdkhp).
- v5 (2026-09-28) — Extension live on Microsoft Edge Add-ons (https://microsoftedge.microsoft.com/addons/detail/jmokpipnbkgmbdnplegjklaaklcclaea).
- v4 (2026-09-27) — Flincth for Mac is live on the Mac App Store; conversion goals updated.
- v3 (2026-09-26) — Recorded the hierarchy: Mac app is the main product, the extension a companion.
- v2 (2026-09-26) — Firefox and Edge versions are built; no longer "planned".
- v1 (2026-09-26) — Initial context, auto-drafted from the repositories.
