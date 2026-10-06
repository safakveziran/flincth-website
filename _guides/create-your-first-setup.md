---
title: "How to Create Your First Setup in Flincth"
description: "Build a setup in Workspace Manager: choose a layout, put an app in each region, decide what happens to everything else, then switch to it."
order: 2
updated: 2026-10-06
---

A **setup** is one kind of work: coding, writing, a meeting. It says which apps belong to that work, where their windows go on your screens, and what happens to every other app. Each setup also keeps its own clipboard history.

This guide builds one from scratch. It takes a few minutes.

You need the Flincth Apply shortcut first. If you haven't added it yet, start with [How to Install the Flincth Apply Shortcut](/guides/install-the-flincth-apply-shortcut).

## 1. Open Workspace Manager

Click the Flincth icon in the menu bar and choose **Workspace Manager…**.

Flincth's code and some of its buttons say *workspace*; it means the same thing as *setup*.

## 2. Add a setup and name it

1. Click **Add New Workspace** in the sidebar.
2. Click the new setup's name to rename it. Type something short, such as *Code*, and press Return.

The name is what you'll see in the menu bar, so keep it to a word or two.

## 3. Divide the screen into regions

The middle of Workspace Manager shows each connected screen. A **region** is the part of a screen one app's window will fill.

1. Click a screen to select it.
2. Pick a starting layout from the small palette at the top left: **Two Columns**, **Two Rows**, **Main + Stack** or **Four Quarters**. This replaces every region on that screen, and nothing else.
3. Need another region? Click **Add Area**.

Adjust the regions until they fit how you work:

- Drag the middle of a region to move it.
- Drag an edge or a corner to resize it.
- Regions snap to each other's edges and to the screen's edges and centre. Hold <kbd>⌥</kbd> while dragging to turn snapping off.

Regions may overlap or leave gaps. Each one is placed on its own.

## 4. Put an app in each region

1. Click **Choose App** inside an empty region.
2. Pick the app.

To change it later, double-click the region, or select it and click **Choose Application…** in its details.

Apps don't have to be running while you set this up. When you switch to the setup, Flincth opens any that aren't.

Each app gets one region per setup. Chrome, Firefox and Safari are the exception: they can fill several regions, shown as *Window 1*, *Window 2* and so on.

## 5. Decide what happens to everything else

The **Everything Else** section decides what happens to apps that aren't in this setup.

By default they are **hidden** when the setup activates, the same as pressing <kbd>⌘H</kbd>. They keep running with all their work, and come back when you click them in the Dock or switch to a setup that includes them.

If something should always stay visible, such as a music player or a timer, click **Add Exception…**, choose the app and set it to **Keep open**.

To change the default for every setup, open **Settings → General → Applications outside a setup** and choose **Hide** or **Keep open**.

Flincth never quits an app and never minimises one. Hiding is the strongest thing it does.

## 6. Switch to it

There are three ways:

- Click the Flincth icon in the menu bar and choose the setup.
- In Workspace Manager, click **Activate**, or double-click the setup in the sidebar.
- Give it a keyboard shortcut (below).

Flincth opens the apps that aren't running, moves each window into its region and hides the rest. The active setup gets a checkmark in the menu.

## 7. Add a keyboard shortcut (optional)

1. In Workspace Manager, select the setup and click **Add Shortcut**.
2. Type one letter or digit. The shortcut is always <kbd>⇧⌘</kbd> plus that key, for example <kbd>⇧⌘D</kbd>.
3. Click **Save**.

If another setup or another app already uses that combination, Flincth tells you which one, and you can choose a different key.

## What a setup can't do

- It arranges windows on the **desktop you're on**. No app can move a window to a different Mission Control desktop.
- It doesn't move windows that are in **full screen**. Leave full screen with <kbd>⌃⌘F</kbd> first.
- It is made for the screens that were connected when you built it. See [Window Layouts for Two Displays or an Ultrawide](/guides/layouts-for-two-displays-and-ultrawide-monitors).

## Next

- [Example setups for coding, writing and meetings](/guides/example-setups-for-coding-writing-and-meetings)
- [Use a separate clipboard history for each setup](/guides/per-setup-clipboard-history)
