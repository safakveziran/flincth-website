---
title: "How to Put Your Desk Back with Not Flincth"
description: "Not Flincth returns your windows to how they were before you first switched setups. What it restores, what it can't, and how it differs from Hide All Apps."
order: 5
updated: 2026-10-06
platform: mac
redirect_from: /guides/restore-your-desk-with-not-flincth
---

Trying a new tool that moves your windows around is a little nerve-racking. What if you want your old desk back?

That's what **Not Flincth** is for. One click returns your windows to where they were before you started switching setups.

## Use it

Click the Flincth icon in the menu bar and choose **↩ Not Flincth**.

It is dimmed until you've activated a setup at least once since Flincth started.

## What "before" means

Flincth takes a snapshot of your desk the **first time you activate a setup** after Flincth starts: which apps were running, where each window was, and which apps were hidden.

- Switching between setups after that doesn't change the snapshot.
- Choosing Not Flincth and then a setup again doesn't change it either.
- Quitting Flincth throws the snapshot away. The next first switch takes a new one.

The snapshot is held in memory only and never saved to disk.

The snapshot isn't taken when Flincth starts, on purpose. If you open Flincth at login, your desk is still empty at that moment, and "back to an empty desk" wouldn't help anyone.

## What it does

When you choose Not Flincth:

1. Every window in the snapshot is shown again and moved back to where it was.
2. Apps that weren't running at the time, including ones a setup opened, are hidden.
3. Nothing is quit. Ever.
4. No setup is marked as active any more. What you copy from now on goes into the **General** clipboard list.

## What it can't bring back

- **Windows you've closed since.** They're skipped, and Flincth tells you which ones.
- **Apps you've quit since.** Flincth doesn't reopen them.
- **Windows whose display is gone.** If you unplugged a display, macOS has already moved its windows somewhere you can reach them. Flincth leaves them there rather than sending them back to a screen that isn't there.

## Not Flincth or Hide All Apps?

The Flincth menu has a second escape hatch just below: **Hide All Apps**, also on <kbd>⌃⌥⌘H</kbd>.

- **Not Flincth** puts your windows back where they were before you started switching.
- **Hide All Apps** clears the screen right now. Every app is hidden; nothing is quit or minimised. Choose it again (it now reads **Show Hidden Apps**) or press <kbd>⌃⌥⌘H</kbd> again to bring them back. If a setup is active, Flincth then re-applies it.

Use Hide All Apps for a clean screen before a screen share, and Not Flincth when you want to step out of setups altogether.

## Next

- [Create your first setup](/guides/mac/create-your-first-setup)
- [Example setups for coding, writing and meetings](/guides/mac/example-setups-for-coding-writing-and-meetings)
