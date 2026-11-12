---
title: "How to Use Two Accounts of the Same Site Side by Side in One Browser Tab"
seo_title: "Two Accounts of the Same Site Side by Side in One Tab"
description: "Browsers sign you in to a site once, everywhere. Here are the usual workarounds for using two accounts at the same time, and how a separate-session pane in Flincth Split View does it in one tab."
product: split-view
og_image: /assets/og-extension.png
og_image_alt: og_image_alt
medium_url: https://medium.com/@flincth/two-accounts-of-the-same-site-side-by-side-in-one-tab-362682dd3849
---

You have a work account and a personal account on the same site. Or a client's account and your own. Or you want to see your own site as a signed-out visitor while you edit it as an admin.

And your browser lets you be one of those people at a time.

This post explains why, the usual ways around it, and the one we added to [Flincth Split View](/browser/split-view/) in version 1.0.3: a pane with its own separate session, next to your normal one, in the same tab.

---

## Why your browser signs you in once

When you sign in to a site, it gives your browser a cookie: a small note that says "this is you". Your browser sends that note back with every request to the site, from every tab and every window.

That's what makes the web convenient. Sign in once, and you're signed in everywhere.

It's also why a second account is awkward. Two tabs of the same site share the same cookie, so they're the same person. Sign in as someone else in one tab, and the other tab usually follows.

---

## The usual workarounds

There are a few, and each one has a cost.

**The site's own account switcher.** Some big services let you add several accounts and switch between them. It works well where it exists, but only on that site, and many sites don't offer it.

**A private window.** An incognito or private window starts without your cookies, so you can sign in as someone else there. But it's a separate window to arrange next to the first, and you start from scratch every time you open one.

**A second browser profile.** Chrome and Edge profiles keep completely separate cookies, extensions and history. They're the most thorough option, and the heaviest: a whole second browser window with its own setup, just to hold one extra account.

**Firefox containers.** Firefox's Multi-Account Containers extension gives individual tabs their own cookies. It's a good answer in Firefox, but you're still flipping between tabs.

All of them give you the second account in another window or another tab. None of them puts both accounts in front of you at once.

---

## A separate session in a pane

Flincth Split View divides one browser tab into panes, with a site in each. Normally every pane uses your browser's sign-in, just like a tab: if you're signed in to a site, you're signed in to it in the pane too.

**Separate session** changes that for one pane. Hover over the pane, click the button with a person and a cross in its toolbar, and the pane reloads without your existing logins. A line under the toolbar says *Separate session · Uses a different login from your browser*. Sign in there with the other account.

Now the two accounts sit side by side: your usual one in one pane, the other one in the next. Save the arrangement as a workspace, and it's one click or one shortcut away next time.

Some ways to use it:

- **Work and personal** accounts of the same tool, both visible.
- **Your account and a client's**, when you manage something for someone else.
- **Admin and visitor.** Edit your shop, blog or app as an admin in one pane, and see what a signed-out visitor sees in the next.
- **Two test accounts** of something you're building, to watch one user's action appear for the other.

Click the same button again, and the pane goes back to your normal session.

---

## How it works, and what it doesn't do

Chrome and Edge can load a frame without the browser's stored cookies and with a temporary storage of its own. Flincth asks the browser to load the pane that way. The browser does the separating; Flincth never reads, copies or moves a site's cookies to do it.

That design has a few consequences worth knowing:

- **It isn't incognito.** The pane's address is saved with your workspace, as with any pane, and history suggestions keep working.
- **It lasts until the Flincth tab reloads.** Reload the tab or restart the browser, and you'll sign in again. Nothing from the separate session is kept.
- **Panes of the same site share it.** Two separate-session panes showing the same site in one workspace see the same session, so you get two accounts, not three.
- **Pop-ups are blocked.** Sites that sign you in through a pop-up window won't work in a separate-session pane.
- **It stays in the pane.** While it's on, the pane can't be opened as a window or in a tab, because the session can't go with it.
- **The site has to show in a pane.** The button appears only on panes that show their site inside the pane, and only for web addresses. A site that refuses to be shown inside another page can't use it. We wrote about [why some sites go blank in a split screen](/blog/why-some-websites-go-blank-in-a-split-screen).

**Firefox** doesn't support separate sessions inside a pane, so the button doesn't appear there. If you import a workspace from Chrome or Edge that has a separate-session pane, Firefox shows **Use browser session** in that pane instead; click it to load the site normally.

---

## What Flincth keeps, and what it doesn't

Flincth Split View collects no data and makes no network requests of its own. Your workspaces and the addresses in your panes are stored in your browser, on your device. The accounts you sign in to in a separate-session pane are between you, the site and your browser; Flincth never sees the passwords or cookies.

---

## Try it

Flincth Split View is free for Chrome, Microsoft Edge and Firefox. Pick your browser on the [Split View page](/browser/split-view/), and see the step-by-step guide for [using a separate session in a pane](/guides/chrome/separate-session-in-a-pane) in Chrome, or [in Edge](/guides/edge/separate-session-in-a-pane).

If there's a site you use with two accounts every day, I'd like to know which one, and whether it works for you in a separate-session pane.
