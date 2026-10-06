---
title: "Window Layouts for Two Displays or an Ultrawide Monitor"
description: "Lay out a Flincth setup across two or more displays or one ultrawide: regions per screen, size limits for narrow apps, and several browser windows."
order: 3
updated: 2026-10-06
---

Flincth is at its best on a big desk: two or three displays, or one wide monitor. This guide covers what changes when you lay out a setup for more than one laptop screen.

If you haven't built a setup yet, start with [How to Create Your First Setup](/guides/create-your-first-setup).

## Every screen has its own regions

In Workspace Manager, each connected screen appears in the middle of the window.

Lay out each screen on its own:

1. Click a screen to select it.
2. Pick a layout from the palette at the top left, or click **Add Area**.
3. Put an app in each region with **Choose App**.

A layout preset only replaces the regions on the screen you selected. Your other screens, and your other setups, stay as they are.

Each setup has its own regions. Your *Code* setup can split the main display in two while your *Meeting* setup gives the whole display to one app.

## A layout for two displays

A common start:

- **Main display, Main + Stack:** your main app in the large region, two supporting apps stacked beside it.
- **Second display, Two Rows:** chat or email on top, a browser below.

Put the app you look at most on the display in front of you, and the ones you only glance at on the other.

## A layout for an ultrawide

Half of a 34-inch ultrawide is about as wide as a whole laptop screen. That's great for an editor and far too wide for a chat window.

Two things help:

**Three regions instead of two.** Pick **Two Columns**, click **Add Area**, then drag the three regions side by side. They snap to each other's edges and to the centre of the screen, which makes even thirds easy. A wide centre with two narrow sides works well too.

**Size limits.** Select a region and open **Size Limits** to set a minimum or maximum width and height, in points. A chat app limited to 700 points wide stays readable however wide its region is; Flincth centres the window inside the region.

Without limits, a region simply scales with the screen, which is usually what you want.

## Several windows of one browser

Chrome, Firefox and Safari can fill more than one region in the same setup, even on different displays. The regions are numbered *Window 1*, *Window 2* and so on, and open windows fill them in that order.

If you have fewer windows open than regions, Flincth asks the browser for a new one. The first time, Shortcuts may ask whether it may control that browser; allow it if you want this to work.

Every other app gets one region per setup.

## When the screens change

A setup belongs to the screens that were connected when you made it. Flincth activates it only when exactly those screens are connected. If one is missing, or an extra one is plugged in, it tells you instead of piling windows onto whatever screens are there.

If you use your Mac both at a desk and on the go, make one setup for each:

- *Code: Desk* for the laptop plus external displays.
- *Code: Laptop* for the built-in screen alone.

[Duplicate](#duplicate-a-setup) the desk version and lay out the copy for the laptop.

## Duplicate a setup

Right-click a setup in Workspace Manager's sidebar and choose **Duplicate Workspace**. The copy keeps the apps, regions and rules, so you only have to change what's different. A copy never takes the original's keyboard shortcut.

## Mission Control desktops

Flincth arranges the desktop you're on. No app can move a window from one Mission Control desktop to another.

If you keep a different kind of work on each desktop, activate a setup on each one. Then turn on **Settings → Advanced → Reapply a setup when I switch to its desktop**, and Flincth puts each desktop's arrangement back when you return to it.

If an app's window keeps opening on the wrong desktop, pin it: right-click its Dock icon and choose **Options → Assign To → This Desktop**.

## Next

- [Example setups for coding, writing and meetings](/guides/example-setups-for-coding-writing-and-meetings)
- [Put your desk back with Not Flincth](/guides/restore-your-desk-with-not-flincth)
