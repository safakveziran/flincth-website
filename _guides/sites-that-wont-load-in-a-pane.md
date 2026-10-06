---
title: "When a Site Won't Show in a Flincth Pane: Windows and Tabs"
description: "Some sites refuse to load inside another page or lose your sign-in there. Open them as an attached window or a tab, and keep them in your workspace."
order: 3
updated: 2026-10-06
product: extension
---

Most sites display inside a Flincth pane without any fuss. A few don't:

- Some sites **refuse to be shown inside another page** at all. The pane stays blank or shows an error.
- Some keep you **signed in** with storage that an embedded view can't reach. The pane shows the site, but as if you were signed out.

Flincth doesn't try to force either. It gives each pane three ways to show its site, and you choose.

| Mode | What you see | Sign-in |
| --- | --- | --- |
| **Inside the pane** | The site, embedded in the tab | Depends on the site |
| **Attached window** | A real browser window lined up over the pane | Exactly as in a normal tab |
| **Opens in a tab** | A card in the pane that opens the site in a normal tab | Exactly as in a normal tab |

## When a site is slow

If a site hasn't finished loading after about eight seconds, the pane asks **Trouble with this site?** and offers:

- **Keep showing this pane**, if it's just slow. The page keeps loading either way.
- **Try again**.
- **Open as a window**.
- **Open in a tab**, which opens the site in a normal browser tab and leaves the pane as it is.

You can turn this prompt off in **Settings → Suggest alternatives when a site takes longer to load**.

## Open it as an attached window

Click **Open as a window** in the pane's toolbar.

The site opens in a real browser window placed exactly over its pane. It behaves as it does in an ordinary tab, with the same session and the same sign-in, and it stays part of your workspace:

- It **follows its pane** when you resize the split.
- It **minimises** when you switch to another tab or another workspace, and comes back when you return.
- In **Chrome and Edge**, it also follows when you move the browser window, and if you nudge it slightly, it snaps back onto its pane. Firefox doesn't tell extensions when a window moves, so there you move it back yourself.

Because it's a real window, it also appears in your window switcher and in screenshots of your screen.

**Narrow panes.** Your operating system won't make a window narrower than about 500 pixels. If a pane is smaller than that, the pane says so, and the window overlaps its neighbours slightly. Widen the pane, or use fewer panes in that row.

**Going back.** To try the site inside the pane again, click **Show this site inside the pane instead** in its toolbar.

**If you close the window.** The pane says *Its window is closed* and offers **Open the window**. Flincth never reopens a window you closed on purpose.

**If you close the Flincth tab.** Attached windows stay open, in case they hold work you haven't finished. The next time you open Flincth, it picks them up and lines them up with their panes again.

## Open it in a tab

When a pane says *example.com will not display here*, click **Open in a tab**. On a pane whose site runs in an attached window, the same choice is **Open in a tab instead**.

The pane turns into a card saying *example.com opens in a normal tab*. Click **Open in a tab** on the card whenever you need the site.

This is the simplest option for a site you only check now and then.

## In Firefox

In Firefox, a site that blocks embedding stays blank in a pane rather than showing an error. If a pane stays empty, open the site as a window.

## Why Flincth doesn't do more

Getting round a site's refusal or reaching its sign-in from inside another page would mean reading your cookies or weakening your browser's security. Flincth does neither. Moving the site into a real window, where its sign-in already works, solves the same problem without touching either.

## Next

- [Keyboard shortcuts for switching workspaces](/guides/keyboard-shortcuts-for-browser-workspaces)
- [Settings, backups and moving your workspaces](/guides/extension-settings-and-backups)
