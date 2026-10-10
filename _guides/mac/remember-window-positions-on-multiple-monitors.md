---
title: "How to Make a Mac Remember Window Positions on Multiple Monitors"
seo_title: "Make a Mac Remember Window Positions on Multiple Monitors"
description: "macOS forgets where your windows were when a monitor disconnects. Why it happens, what macOS offers, and how to put every window back with one shortcut."
order: 7
updated: 2026-10-10
---

You unplug your MacBook from the desk, or the external display sleeps, and every window piles onto the laptop screen. Plug back in and they stay there. You drag them back one by one.

This guide explains why macOS does this and how to get your arrangement back in one step.

## Why your windows move

macOS has no memory of where windows sat on each arrangement of displays. When a display disconnects, macOS moves its windows onto the screens that remain. When the display comes back, nothing moves them back.

It happens more often than unplugging a cable:

- closing the lid or undocking a MacBook,
- a monitor or a dock going to sleep, or waking up in a different order,
- switching the display's input, or a cable that briefly drops the signal.

## What macOS gives you

macOS Sequoia added window tiling: drag a window to the edge of a screen, or use **Window → Move & Resize**, to fill a half or a quarter. It is handy for one or two windows at a time, but it doesn't save an arrangement or restore one after a display comes back. [Mac window arrangement shortcuts](/guides/mac/window-arrangement-shortcuts) lists the keys.

So the fix is to save the arrangement somewhere and put it back on demand.

## Save the arrangement as a setup

In Flincth Workspace Manager, a **setup** records which apps belong to a kind of work and where each one's windows go, across all your screens.

1. Connect your displays the way you use them at your desk.
2. Click the Flincth icon in the menu bar and choose **Workspace Manager…**, then create a setup, for example *Desk*.
3. Select each screen and pick a layout for it, then put an app in each region with **Choose App**.
4. Click **Add Shortcut** and type a key. The shortcut is <kbd>⇧⌘</kbd> plus that key, for example <kbd>⇧⌘D</kbd>.

The full step-by-step version is in [How to Create Your First Setup](/guides/mac/create-your-first-setup) and [Window Layouts for Two Displays or an Ultrawide Monitor](/guides/mac/layouts-for-two-displays-and-ultrawide-monitors).

## Put everything back after you reconnect

Plug in, wait for the displays to come up, and press the setup's shortcut (or choose it from the Flincth menu). Flincth opens any app in the setup that isn't running, moves every window back into its region on the right screen, and hides the apps that don't belong.

Flincth doesn't move windows by itself the moment a display appears. Displays often connect in stages, and windows jumping around while you are typing is worse than one keystroke. It puts things back when you ask.

## One setup for the desk, one for the road

A setup belongs to the screens that were connected when you made it, and Flincth activates it only when exactly those screens are there. That keeps a two-monitor layout from being squeezed onto a laptop screen.

If you work both docked and on the go, make two:

- *Desk* for the laptop plus external displays,
- *Laptop* for the built-in screen alone.

Right-click *Desk* in Workspace Manager's sidebar, choose **Duplicate Workspace**, and lay out the copy for the laptop. Undock and press the laptop setup's shortcut; dock again and press the desk one.

## What it can and can't move

- It arranges windows on the **desktop you're on**. No app can move a window to another Mission Control desktop.
- It doesn't move windows in **full screen**. Leave full screen with <kbd>⌃⌘F</kbd> first.
- Windows move through the **Flincth Apply** shortcut you add to Apple Shortcuts once, so it never needs Accessibility access to move them. See [How to Install the Flincth Apply Shortcut](/guides/mac/install-the-flincth-apply-shortcut).

## Next

- [Put your desk back with Not Flincth](/guides/mac/restore-your-desk-with-not-flincth)
- [Example setups for coding, writing and meetings](/guides/mac/example-setups-for-coding-writing-and-meetings)
