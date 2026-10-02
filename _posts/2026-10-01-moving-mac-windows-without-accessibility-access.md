---
title: "How My Mac Window Manager Moves Windows Without Accessibility Access"
description: "Building a sandboxed window manager for the Mac App Store meant giving up the one API every window manager relies on. Here is what replaced it."
medium_url: https://medium.com/@support_9084/how-my-mac-window-manager-moves-windows-without-accessibility-access-4aafe8284f96
---

A few days ago I wrote about [why I built Flincth](/blog/i-got-tired-of-rearranging-my-mac-windows): I was tired of rebuilding the same desktop every time I switched from coding to research to meetings.

This post is about how it works underneath, because the most interesting part of building it wasn't the idea.

It was a constraint.

---

## Every window manager asks for the same permission

If you have ever installed a window manager on a Mac, you have probably seen the prompt.

*"This app would like to control this computer using accessibility features."*

Then you open System Settings, find Privacy & Security, scroll to Accessibility, and flip a switch.

There's a good reason for that. The Accessibility API is how one app reaches into another app's windows and moves them. It is the standard tool for the job.

It is also one of the most powerful permissions you can give an app. Accessibility access isn't limited to windows. It lets an app read what is on screen in other apps and act on your behalf inside them.

I wanted Flincth on the Mac App Store. And that is where the standard tool stopped being available.

---

## The sandbox says no

Apps on the Mac App Store must run in the App Sandbox.

A sandboxed app cannot use the Accessibility API to control other applications. It doesn't matter how politely you ask the user. The sandbox simply doesn't allow it.

A few long-standing window managers on the App Store predate that rule. A new app doesn't get that treatment.

So I had a choice.

I could ship outside the App Store, ask for Accessibility access, and build the same thing everyone else builds.

Or I could find out whether a window manager could be built without it.

I chose the second, mostly out of curiosity. It turned out to shape the whole product.

---

## The answer was already on every Mac

Apple's Shortcuts app has a small, easy-to-miss group of actions under **Scripting → Windows**:

- **Find Windows**, which can filter by app name, size, position and window index
- **Resize Window**
- **Move Window**

Shortcuts runs those actions with its own permissions. A sandboxed app is allowed to ask Shortcuts to run a shortcut.

That was the opening.

Flincth doesn't move any window itself. It works out exactly where every window should go, then hands that plan to a shortcut called **Flincth Apply**, which does the moving.

You install that shortcut once. The app walks you through it the first time you need it, and you can open it in Shortcuts and read every action it contains. Nothing about it is hidden.

---

## Doing the hard part in the app

The Shortcuts actions are simple. They move one window to one position and give it one size.

Everything else has to happen before Shortcuts is involved.

When you switch to a setup, Flincth:

1. Works out which displays are connected and which one each region belongs to.
2. Converts each region from its saved, display-relative shape into exact screen coordinates, allowing for the menu bar and the Dock.
3. Finds the windows that belong to each app in the setup.
4. Builds one list of window-and-rectangle pairs.

Then it sends that whole list to the shortcut in a single run, instead of calling Shortcuts once per window.

One detail I tested before trusting it: the coordinates Shortcuts expects are **global**. A window given an X position past the width of your main display lands on the second display. If it had been the other way round, every placement would have had to carry its display along with it.

---

## Reading windows without reading your screen

To place windows, and to put your desk back afterwards, Flincth also needs to know where windows are right now.

macOS has a function for that, `CGWindowListCopyWindowInfo`. It isn't an Accessibility API and it works inside the sandbox.

Without Screen Recording permission it won't tell you window titles. It still gives the position, size, owner and window number of every window. That turned out to be enough.

So Flincth identifies windows by app and position, not by title. I could have asked for Screen Recording to get the titles. I decided another privacy prompt was a worse trade than slightly harder window matching.

The result is a window manager that asks for no Accessibility access and no Screen Recording access.

---

## Hiding instead of minimising

A setup isn't only about the apps you need. It is also about the ones you don't.

Minimising another app's windows would need Accessibility again. Hiding an app doesn't. `NSRunningApplication.hide()` works inside the sandbox with no special permission.

So when you switch, apps outside the setup can hide. One call per app, and it is the same thing as pressing ⌘H.

It turned out to be the better behaviour anyway. Hidden apps come back exactly as they were, which made one of my favourite features easy to build: **Not Flincth**, a single click that returns your desk to how it looked before you started switching.

---

## What I had to give up

Building this way has real costs, and I'd rather be upfront about them.

**It isn't instant.** Every move goes through Shortcuts, which is slower than an app moving windows directly. Switching a setup takes a moment to settle rather than happening in a single frame.

**It needs a shortcut you install.** That is one more step on day one. If the shortcut goes missing, Flincth notices on the next switch and offers to install it again.

**It can't cross desktops.** No public API moves another app's window to a different Mission Control desktop, and Shortcuts has no action for it either. Flincth places windows on the desktop you're on, and gives each desktop its own arrangement.

**It can't enter or leave full screen.** Same reason.

**It depends on Apple.** If Apple changes the Shortcuts window actions, Flincth has to adapt. There's no back door to fall back on, by design.

---

## What I got in return

When I started, the constraint felt like a handicap. Now it feels like the point.

**Fewer permissions.** Flincth never asks to control your computer. It moves windows through a shortcut you can read, and reads window positions without reading your screen.

**A sandbox around everything else.** Your setups and your per-setup clipboard history live inside the app's sandbox on your Mac.

**Apple review.** Every version goes through the App Store, and so does every update.

**A simpler product.** Flincth doesn't watch your windows all day. It arranges them when you switch and then gets out of the way.

---

## The lesson I keep coming back to

Most of us reach for the most powerful API available, because it is the easiest way to make something work.

Taking that option away forced me to ask what the product actually needed. It needed to place windows when you switch setups. It didn't need to control your Mac the rest of the time.

The narrower tool turned out to be enough.

---

## Try it

Flincth is on the Mac App Store as a one-time purchase, with no account and no subscription.

Website: [flincth.com](https://flincth.com)

Mac App Store: [Flincth – Workspace Manager](https://apps.apple.com/us/app/flincth-workspace-manager/id6809227474)

If you build Mac apps, I'd love to hear whether you've run into the same wall, and how you got around it. And if you try Flincth, tell me which setup you created first.
