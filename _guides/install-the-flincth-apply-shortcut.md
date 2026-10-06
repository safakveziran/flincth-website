---
title: "How to Install the Flincth Apply Shortcut"
description: "Flincth moves windows through one Apple Shortcut you add once. Here is how to install it, approve its first run and fix the usual snags."
order: 1
updated: 2026-10-06
---

Flincth never asks for Accessibility access to move your windows. Instead, it works out where every window should go and hands that plan to one shortcut in Apple's Shortcuts app, which does the moving.

You add that shortcut once. This guide walks through it.

In your Shortcuts library the shortcut is named **FlincthApply v2**. The app and this site also call it the Flincth Apply shortcut; it is the same thing.

## Before you start

- A Mac with macOS 14 or later.
- Flincth from the [Mac App Store](https://apps.apple.com/app/flincth-workspace-manager/id6809227474?mt=12).
- The Shortcuts app, which comes with macOS.

## Add the shortcut

1. Open Flincth from the menu bar and choose **Workspace Manager…**.
2. If the shortcut isn't installed yet, Workspace Manager shows a notice that **FlincthApply v2 is required**. Click **Add to Shortcuts**.

   You will see the same prompt if you try to activate a setup before the shortcut is there: *One more step: add the shortcut in the window that opens.*
3. Shortcuts opens with the shortcut ready to add. Add it to your library.
4. Go back to Flincth. There is no button to press: Flincth notices the shortcut on its own and the notice disappears.
5. Activate a setup. If you got here from the activation prompt, click **Activate** again.

## Approve the first run

The first time a setup moves windows, macOS asks whether the shortcut may use the list of windows Flincth gave it. Flincth shows *Arranging windows…* while it waits.

Answer that prompt with **Always Allow**, and the switch carries on. You won't be asked again.

If you put Chrome, Firefox or Safari in more regions than it has windows open, Flincth asks that browser for a new window through the same shortcut. Shortcuts may ask, once per browser, whether it may control it. Allow it if you want Flincth to open those windows for you.

## What the shortcut does, and doesn't

- It receives a list of windows and target rectangles, already worked out by Flincth, and resizes and moves each window.
- It has no logic of its own and you never need to edit it.
- You can open it in Shortcuts at any time and read every action it contains.
- It moves windows on the desktop you are on. Neither it nor any other app can move a window to a different Mission Control desktop or into full screen.

## If something goes wrong

**"The Flincth helper Shortcut is missing."** It was deleted or never added. Click **Add to Shortcuts** in Workspace Manager and add it again.

**"The helper Shortcut is out of date."** A Flincth update needs a newer version of the shortcut. Click **Add to Shortcuts** and add the new one. Older versions are no longer used; you can delete them from Shortcuts whenever you like.

**"More than one shortcut is named FlincthApply v2."** Flincth won't guess which copy to run. Open Shortcuts, delete the extra copies so exactly one is left, then return to Flincth.

**You renamed it.** Flincth looks for the exact name **FlincthApply v2**. Rename it back, or add it again from Workspace Manager.

**A window didn't move.** Open the Flincth menu: it shows a line such as *1 could not be positioned…*. Click it for a summary that names each window and why it wasn't placed. The most common causes are a window on another desktop and a window in full screen. The [Support page](/support) covers the rest.

## Next

With the shortcut in place, [create your first setup](/guides/create-your-first-setup).
