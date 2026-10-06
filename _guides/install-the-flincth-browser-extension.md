---
title: "How to Install the Flincth Extension and Allow Website Access"
description: "Install Flincth in Chrome, Firefox or Edge, pin it to the toolbar, and choose how it gets access to the sites you put in its panes."
order: 1
updated: 2026-10-06
product: extension
---

The Flincth browser extension splits one tab into panes, with a different site in each. Before a pane can show a site, your browser has to let Flincth display it. This guide covers installing the extension and that one decision.

The extension is a companion to [Flincth for Mac](/), and each works without the other.

## Install it

Pick your browser:

- **Chrome:** [Chrome Web Store](https://chromewebstore.google.com/detail/flincth/blkacdknkggnilgkmlmjemacfmnmdkhp), then **Add to Chrome**.
- **Firefox:** [Firefox Add-ons](https://addons.mozilla.org/addon/flincth/), then **Add to Firefox**. It needs Firefox 140 or later.
- **Microsoft Edge:** [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/jmokpipnbkgmbdnplegjklaaklcclaea), then **Get**.

Flincth is free and has nothing to buy inside it.

## Pin it to the toolbar

Browsers tuck new extensions away. Pin Flincth so its popup is one click away:

- **Chrome:** click the puzzle-piece icon next to the address bar, then the pin beside Flincth.
- **Firefox:** click the extensions icon, then the gear beside Flincth and **Pin to Toolbar**.
- **Edge:** click the extensions icon, then the eye beside Flincth to show it in the toolbar.

## Allow website access

Installing Flincth gives it access to no website at all. Access is asked for later, from your own click. How it is asked depends on your browser.

### Chrome and Edge (version 1.0.2 and later)

Right after installation, Flincth opens a page titled **Enable websites in Flincth**.

- **Enable all websites** asks your browser for access to all websites. Confirm it in the browser's own prompt. Panes can then show any site you put in them, including when a site redirects you to another address.
- **Not now** skips the step. You can still create workspaces, pick layouts and add sites; they just stay inactive. Flincth asks again whenever you activate a site, until access is granted.

### Firefox

Firefox asks one site at a time. The first time you put a site in a pane, the pane asks **Show example.com here?** Click **Allow example.com**, and confirm in Firefox's prompt.

Earlier Chrome and Edge versions of Flincth work this way too.

## What access is used for, and what it isn't

- Flincth uses it to show sites **inside its own tab**. Your ordinary tabs are untouched.
- It never reads cookies, page content, passwords or anything you type into a site. Bundled code inside the panes only keeps track of each pane's address, so **Back** and **Forward** work.
- Flincth collects no data and connects to no server. Your workspaces stay in your browser's local storage.

Some sites still need a normal browser window for sign-in, whatever access you give. [When a site won't show in a pane](/guides/sites-that-wont-load-in-a-pane) explains what to do.

## Take access back

You can revoke access at any time from your browser's extension settings:

- **Chrome:** `chrome://extensions` → Flincth → **Details** → **Site access**.
- **Edge:** `edge://extensions` → Flincth → **Details** → **Site access**.
- **Firefox:** **Add-ons and themes** → Flincth → **Permissions**.

Revoking unloads the sites in your panes and minimises any attached windows. Your workspaces, layouts and site assignments are kept, ready for when you allow access again.

## Next

[Split a browser tab into your first workspace](/guides/split-a-browser-tab-into-a-workspace).
