---
title: "Usage Statistics in Flincth Workspace Manager: What Is Sent and How to Turn It Off"
seo_title: "Turn Off Usage Statistics in Flincth Workspace Manager"
description: "Workspace Manager 1.2 shares usage statistics by default. What Google Analytics receives, what it never receives, and how to switch it off in Settings."
order: 11
updated: 2026-11-17
platform: mac
---

From version 1.2, Flincth Workspace Manager shares **usage statistics** through Google Analytics for Firebase. They show which features are used and whether setups activate successfully. They are on by default, and one switch turns them off.

## Turn them off

1. Click the Flincth icon in the menu bar and choose **Settings…**.
2. Open the **General** tab.
3. Under **Usage statistics**, turn off **Share usage statistics**.

There is nothing to save. Collection stops straight away, the local analytics identifier is reset, and the choice is remembered after restarting. Turn the switch back on at any time.

## What is sent

While the switch is on, Google Analytics receives:

- a small, fixed set of events: the app launching, statistics being turned on, a setup being created, and a setup activating, activating only partly or failing;
- an app-installation identifier and standard installation, lifecycle and device details, such as the macOS version;
- the connection's IP address, from which Google may infer an approximate location.

These data are linked to the installation, so they are not anonymous. Advertising features are disabled and nothing is used to track you across other companies' apps or websites.

## What is never sent

- Setup names
- Clipboard text
- The list of apps in a setup, or any app's name
- Window titles, positions or file paths

Your setups and clipboard history stay on your Mac whether the switch is on or off.

## Separate from feature announcements

Usage statistics and **feature announcements** are two different settings. Announcements are notifications about new features, sent through OneSignal, and are off unless you turn them on. Changing one does not change the other.

## Data already sent

Turning the switch off stops future statistics. It doesn't remove statistics Google has already received. Google may keep them. The [privacy policy](/privacy#workspace-manager) has the full details.

## Next

- [Switch Setups with Quick Shifter](/guides/mac/switch-setups-with-quick-shifter)
- [Use a separate clipboard history for each setup](/guides/mac/per-setup-clipboard-history)
