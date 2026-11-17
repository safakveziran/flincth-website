---
title: "Meet Quick Shifter: Every Setup, One Shortcut Away"
seo_title: "Quick Shifter: Switch Mac Setups from One Shortcut"
description: "Flincth Workspace Manager 1.2 adds Quick Shifter: press Control-Option-Command-S, see your setups in a circle with their app icons, and switch in one click."
product: workspace-manager
og_image: /assets/og-image.png
og_image_alt: og_image_alt_workspace_manager
medium_url: https://medium.com/@flincth/quick-shifter-switch-mac-setups-from-one-shortcut-flincthflincth-workspace-manager-1-2-2425cdd9f67e
---

[Flincth Workspace Manager](/mac/workspace-manager) 1.2 is out on the [Mac App Store]({{ site.data.mac.store_url }}), and it brings one new feature: **Quick Shifter**.

Press <kbd>⌃⌥⌘S</kbd> and your setups appear in a circle. Each one shows its name and the icons of its apps. Pick one and your desk changes.

## Why we built it

A setup is one kind of work: coding, writing, a meeting, an evening of research. Until now there were two ways to switch: the menu bar, or a shortcut you give each setup, such as <kbd>⇧⌘D</kbd>.

Shortcuts are the fastest way to reach the two or three setups you use all day. But many of you made more setups than that, and nobody remembers eight shortcuts. The menu bar works, but it's a list of names, and names stop being helpful once you have "Writing", "Writing (long)" and "Writing – laptop".

So we wanted one key combination that shows everything, and a way to recognise a setup without reading its name. Apps turned out to be the answer: you know your coding setup because it has your editor, a terminal and a browser in it.

## How it works

- **Open it from anywhere.** Press <kbd>⌃⌥⌘S</kbd> in any app, or choose **Quick Shifter** from the Flincth menu.
- **Recognise setups by their apps.** Each segment of the circle shows a setup's app icons side by side, with its name underneath. Hover over a segment, or use the arrow keys, and the centre of the circle shows its name and apps.
- **Switch in one step.** Click a segment or press <kbd>Return</kbd>. The setup activates exactly as it does from the menu bar: Flincth opens the apps that aren't running, moves each window into its region and hides the rest.
- **Change your mind.** Press <kbd>Esc</kbd>, click away, or press <kbd>⌃⌥⌘S</kbd> again.

The circle holds up to eight setups. If you have more, page buttons let you move between pages.

## Only the setups that fit

Quick Shifter lists only the setups you can use with the displays connected right now. If you built a setup for your desk with two monitors, it won't appear while you're on the sofa with just the laptop. It comes back when you plug in again.

That means the circle never offers something that can't work, and it stays short when you're away from your desk.

## Made for the Mac it runs on

On macOS 26, Quick Shifter uses Apple's Liquid Glass. On macOS 14 and 15 it uses a translucent background, and if you turn on **Reduce transparency** in System Settings it becomes solid.

Like the rest of Flincth, it needs no Accessibility permission. The shortcut is registered the same way as Flincth's other global shortcuts, and windows still move only through the [Flincth Apply shortcut](/guides/mac/install-the-flincth-apply-shortcut) you install yourself. Quick Shifter can't move windows between Mission Control desktops or into or out of full screen, and nor can any other part of Flincth.

## Shortcuts or Quick Shifter?

Use both. Give your everyday setups their own shortcuts and use Quick Shifter for everything else, or when you can't remember which key goes with which setup. The [Quick Shifter guide](/guides/mac/switch-setups-with-quick-shifter) covers the details, including what to do if another app already uses <kbd>⌃⌥⌘S</kbd>.

## Also in 1.2: usage statistics

Version 1.2 also starts sharing usage statistics through Google Analytics for Firebase, so we can see which features are used and whether setups activate successfully. They are on by default and one switch in **Settings → General** turns them off. Setup names, clipboard text, app lists and window details are never sent. [What is sent and how to turn it off](/guides/mac/usage-statistics) explains it fully.

## Get it

If you already have Workspace Manager, the update is free. Open the App Store, install 1.2, then press <kbd>⌃⌥⌘S</kbd>. If you don't have it yet, [get Flincth Workspace Manager on the Mac App Store]({{ site.data.mac.store_url }}). It's a one-time purchase with no subscription.

{% include sale-callout.html data="mac" %}

New to setups? Start with [How to Create Your First Setup](/guides/mac/create-your-first-setup). If something doesn't work the way you expect, [tell us](/support#workspace-manager).
