---
title: "Why My Mac Clipboard History Keeps a Separate List for Each Kind of Work"
description: "A clipboard history that mixes every project is noise at best and a leak at worst. Here is why Flincth keeps one list per setup, and what it never records."
medium_url: https://medium.com/@support_9084/why-my-mac-clipboard-history-keeps-a-separate-list-for-each-kind-of-work-flincth-323350f9ade9
---

When I started building Flincth, it was a window manager. [Switch to a setup](/blog/i-got-tired-of-rearranging-my-mac-windows), and your apps move to where that kind of work wants them.

Then I noticed what I was doing right after every switch.

I was digging through my clipboard.

---

## The clipboard doesn't know what you're working on

Like most people who copy a lot, I had used clipboard managers for years. They all work the same way: one long list of everything you have copied, newest first.

That list is great for about ten minutes.

After that it becomes a timeline of your whole day. An API key you copied while debugging. A paragraph from a draft. A client's order number. A URL from a meeting. A commit hash. Another paragraph.

When I came back to coding after an hour of writing, the snippet I needed was buried under everything I'd copied for the writing.

And sometimes it was worse than buried. Once or twice I pasted something from one client's work into another client's document. I caught it. Not everyone does.

---

## A setup is a context, not just a layout

Flincth already had a word for "the kind of work I'm doing right now": a **setup**.

A setup chooses which apps belong to that work and where their windows go. But the arrangement on screen was only the visible part. What a setup really describes is a context.

The things you copy belong to a context in exactly the same way.

The snippets, IDs and links you paste while coding aren't the ones you need while writing. So the clipboard history should switch when the setup switches.

That's what Flincth does. Each setup keeps its own text clipboard history:

- Copy something while your **Code** setup is active, and it goes into Code's list.
- Switch to **Writing**, and the clipboard panel opens on Writing's list.
- With no setup active, what you copy goes into a general list.

Switching doesn't move, merge or clear anything. Each list simply stays where it was, waiting for you to come back.

---

## A hard split, with a way out

I went back and forth on one decision more than any other.

Should an item copied in one setup also appear in a global list?

I decided no. Every item belongs to exactly one list. If something copied while "Client A" was active also showed up everywhere else, the separation would be decoration.

But a clipboard manager that can't produce something you definitely copied is worse than no clipboard manager at all.

So the split decides what you see **first**, never what you can reach. The panel opens on the active setup's list, and an **All** view sits right next to it. In All, every item shows which setup it came from. Search works across everything.

The quiet default keeps the noise out. The way out is one click away.

---

## What it never records

A clipboard manager sees everything you copy. That makes what it *doesn't* record just as important as what it does.

**Passwords.** Password managers, including Keychain and 1Password, mark what they put on the clipboard as concealed. Flincth never records, shows or saves those items. A clipboard manager that ignored that mark would quietly become a plain-text password log.

**Throwaway copies.** Some apps mark their clipboard writes as transient or auto-generated. Flincth skips those too.

**Anything, if you turn it off.** Clipboard history can be switched off entirely. Switching it off deletes what was recorded rather than just hiding it.

---

## Text only, on purpose

Flincth records text: plain text, rich text as plain text, links and file paths.

It doesn't record images. They are the second most copied thing, so this was a real trade-off. But images would make the history file thousands of times larger and much more worth stealing, for a feature that should first prove itself with text.

Copying the same text twice in a row doesn't create a duplicate. The existing item simply moves back to the top.

---

## It stays on your Mac, and it forgets when you ask

History is saved, because a clipboard manager that forgets everything when you log out solves half the problem.

It lives in its own file inside the app's sandbox, readable only by your user account and kept apart from your setups. Nothing in it is sent anywhere.

You decide how much of it there is:

- Each list keeps the last **100** items by default.
- You can have items expire after **1, 7 or 30 days**.
- You can have everything discarded when Flincth quits, so the file never sticks around.
- You can delete a single item, clear one setup's list, or clear everything.

And when you delete a setup, its clipboard history goes with it. The confirmation tells you how many items that is. A list that belongs to nothing and can't be reached from anywhere is just a leak waiting to happen.

---

## Nothing new to allow

Every part of this works inside the Mac App Store sandbox.

Reading the clipboard needs no permission. Neither does the global shortcut that opens the panel. Flincth checks the clipboard for changes a couple of times a second, which is how clipboard managers on the Mac work, because macOS doesn't announce when the clipboard changes.

Press your clipboard shortcut, type a few letters, pick an item, and it's back on your clipboard, ready to paste.

---

## Two halves of one idea

It would be easy to read Flincth as a window manager with a clipboard manager bolted on. I understand why. On their own, each is a well-known kind of app.

But a plain clipboard history is a commodity. One that knows which work you're doing follows naturally from the setups that were already there.

When I switch to Code now, my editor, terminal and docs move into place, and the last thing I copied for that code is the first thing I see.

That's the whole point. Not one more list, but the right one.

---

## Try it

Flincth is on the Mac App Store as a one-time purchase, with no account and no subscription.

Website: [flincth.com](https://flincth.com)

Mac App Store: [Flincth – Workspace Manager](https://apps.apple.com/us/app/flincth-workspace-manager/id6809227474)

If you use a clipboard manager today, I'd like to know how you keep it from filling up with everything at once. And if you try Flincth, tell me which setup's list fills up fastest.
