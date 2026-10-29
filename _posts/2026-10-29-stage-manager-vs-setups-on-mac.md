---
title: "Stage Manager vs. Setups: Grouping Windows Isn't the Same as Arranging Them"
seo_title: "Stage Manager vs. Setups on Mac: Which One Fits?"
description: "Stage Manager tidies the windows you already have open. A setup rebuilds your whole desk for one kind of work. Here is where each one fits, and where it stops."
medium_url: https://medium.com/@flincth/stage-manager-vs-setups-on-mac-which-one-fits-flincth-e9377fe35e97
---

When people hear what Flincth does, one question comes up more than any other: *doesn't the Mac already do this with Stage Manager?*

It's a fair question. Stage Manager is built in, it's free, and it's about bringing order to a cluttered screen. If it covers what you need, you should use it.

But Stage Manager and a Flincth setup answer different questions. Stage Manager asks *which of my open windows should be in front right now?* A setup asks *what should my whole desk look like for this kind of work?* This post walks through both, honestly, so you can tell which one fits the way you work.

---

## What Stage Manager does well

Stage Manager arrived in macOS Ventura. Turn it on from Control Center, and the window you're using takes the middle of the screen. Your other recent apps shrink into a strip of thumbnails on the left. Click one, and it swaps in.

You can also make groups. Drag a thumbnail onto the window in the middle, and the two travel together from then on. Click the group in the strip, and both come back at once.

That is genuinely useful:

- **It's zero setup.** Nothing to install, nothing to configure. Turn it on and it works.
- **It cuts visual noise.** On a single laptop screen, seeing only what you're using, with everything else one click away, is calming.
- **It's flexible.** Groups form as you work. There's nothing to plan ahead of time.

If you work on one screen, mostly in two or three apps at a time, and you mainly want the clutter gone, Stage Manager may be all you need.

---

## Where Stage Manager stops

Stage Manager organizes the windows that are already open. It doesn't know what kind of work you're about to do, and it doesn't build anything for you.

- **It doesn't open apps.** A group only appears once its apps are running. If your editor and terminal aren't open, there's nothing to group.
- **It doesn't decide where windows go.** You still size and place each window yourself. Stage Manager just decides which windows are in front.
- **Groups have no name and no shortcut.** You find a group by recognizing its thumbnails in the strip.
- **Each display is on its own.** With two or more screens, each one runs its own stage and its own groups. There's no single "coding" arrangement that covers your laptop and your external monitor at once.
- **It doesn't touch your clipboard.** What you copied for one project stays mixed in with everything else.

None of that is a flaw in Stage Manager. It was designed to tidy up, not to set up.

---

## What a setup does

Flincth Workspace Manager starts from the other end. You describe a kind of work once, and Flincth rebuilds it whenever you ask.

A **setup** is a named context: *Code*, *Writing*, *Meeting*. It chooses:

- **Which apps belong.** Missing apps are opened when you switch.
- **Where their windows go.** Each app has a place in a layout you draw over your displays, and a setup can span every screen you have.
- **What happens to everything else.** Apps that don't belong are hidden, or kept, by your rule. Flincth never quits anything, so unsaved work is never at risk.
- **Which clipboard history is active.** Each setup keeps [its own list of what you copied](/blog/a-separate-clipboard-history-for-each-kind-of-work), so the snippets for your code don't bury the paragraphs for your writing.

Each setup can have a keyboard shortcut. Press it, and the whole desk changes: apps open, windows move into place across all your displays, the rest step aside, and the right clipboard list comes forward.

---

## Side by side

**Stage Manager**

- Built into macOS, free.
- Works with the windows already open.
- Shows one group at a time per display; you place the windows.
- Groups form as you go and have no names or shortcuts.
- No clipboard history.

**A Flincth setup**

- An app from the Mac App Store, US${{ site.data.mac.price }} once, with no account or subscription.
- Opens the apps the work needs.
- Places every window in its region, across every display, in one step.
- Named, planned once, switched with a shortcut.
- Its own clipboard history for each setup.

---

## What Flincth can't do, either

To be fair to Stage Manager, here's where setups stop:

- **Windows move through a Shortcut.** Flincth is sandboxed and [doesn't ask for Accessibility access](/blog/moving-mac-windows-without-accessibility-access), so it moves windows through a small Shortcut you install once, called *Flincth Apply*.
- **It doesn't move windows between desktops.** A window stays on the Mission Control desktop where it was opened. Flincth does remember which setup you used on each desktop.
- **It doesn't enter or leave full screen.** If an app is in macOS full screen, you leave full screen yourself before Flincth can place it.
- **It needs a little planning.** You draw a layout and choose apps once. Stage Manager needs none of that.

---

## Which one fits you

**Stick with Stage Manager** if you mostly work on one screen, in a handful of apps, and the problem you want solved is clutter.

**Try setups** if your problem is the rebuilding: you have two displays or an ultrawide, you switch between quite different kinds of work in a day, and every switch means opening apps, dragging windows back and digging through your clipboard. That's the case Flincth was [built for](/blog/i-got-tired-of-rearranging-my-mac-windows).

If you want to try setups after using Stage Manager, turn Stage Manager off in Control Center while you do. That way you see what each one does on its own, and you can decide which way of working you prefer.

---

## Try it

Start with [How to Create Your First Setup](/guides/mac/create-your-first-setup), or see [example setups for coding, writing and meetings](/guides/mac/example-setups-for-coding-writing-and-meetings).

If you use Stage Manager today, I'd like to know what you use it for, and what you still end up doing by hand.
