---
title: "How to Use a Separate Clipboard History for Each Setup"
description: "Flincth keeps a text clipboard history for each setup. Open it, search it, paste from it, see everything at once, and decide how long it is kept."
order: 4
updated: 2026-10-06
---

Flincth remembers the text you copy, and keeps it with the setup you were working in. Snippets copied while coding stay with *Code*; quotes and links gathered for an article stay with *Writing*.

It's on from the start. This guide shows how to use it and how to tune it.

## Where copies go

- **A setup is active:** what you copy goes into that setup's list.
- **No setup is active** (including after [Not Flincth](/guides/restore-your-desk-with-not-flincth)): it goes into a list called **General**.

Every item lives in exactly one list. Switching setups doesn't move, merge or clear anything: each list waits for you to come back.

## Open the clipboard

Press <kbd>⇧⌘V</kbd> from any app.

The panel opens on the active setup's list, newest first.

- **Type** to search what you've copied.
- Press <kbd>↑</kbd> and <kbd>↓</kbd> to move through the list.
- Press <kbd>Return</kbd> or click an item to choose it.
- Press <kbd>Esc</kbd> to close the panel without choosing anything.

## See everything

Next to the setup's name at the top of the panel is **All**. It shows every list together, and each item carries the name of the setup it came from. Search works there too.

When no setup is active, the panel simply shows everything.

The split decides what you see first. It never hides something you copied.

## Paste what you chose

Choosing an item puts it back on the clipboard, and Flincth tries to paste it straight into the app you were in before you opened the panel. That is called **One-Step Paste**.

One-Step Paste needs macOS's Accessibility permission, used only to press <kbd>⌘V</kbd> for you. Moving windows never uses it. Until you allow it, choosing an item shows a short note with two buttons:

- **Open Accessibility Settings** takes you to **System Settings → Privacy & Security → Accessibility**, where you can switch Flincth on. Then open the panel and choose the item again.
- **Copy Only** takes you back to your app with the text already copied. Press <kbd>⌘V</kbd> to paste.

## What is recorded, and what isn't

Flincth records **text**: plain text, formatted text (kept as plain text), links and file paths. It doesn't record images.

It never records items your password manager marks as confidential. Keychain, 1Password and most password managers do this, and no setting changes it.

Copying the same text twice in a row doesn't add a duplicate. The existing item moves back to the top.

## Decide how much is kept

Open **Settings → Clipboard**:

- **Keep per setup:** how many items each list keeps, from 10 to 500. The default is 100; the oldest go first.
- **Forget after:** remove items older than **1**, **7** or **30 days**, or **Never** (the default).
- **Forget everything when Flincth quits:** keep the history only while Flincth is running.
- **Open clipboard history:** choose the shortcut: <kbd>⇧⌘V</kbd>, <kbd>⌃⌘V</kbd>, <kbd>⌥⌘V</kbd> or <kbd>⌃⌥⌘V</kbd>.

## Delete history

- **One item:** right-click it in the panel and choose **Delete**.
- **One setup's list:** in Workspace Manager, select the setup and click **Clear History**. Other setups and General are kept.
- **Everything:** **Settings → Clipboard → Clear All Clipboard History**.
- **Turn it off:** switch off **Remember what I copy** in **Settings → Clipboard**. This deletes the history as well as stopping it.

Deleting a setup deletes its clipboard history with it.

## Where it's kept

The history is stored on your Mac, inside Flincth's sandbox, in a file only your user account can read. It is kept apart from your setups and never sent anywhere.

## Next

- [Example setups for coding, writing and meetings](/guides/example-setups-for-coding-writing-and-meetings)
- [Why Flincth keeps a separate list for each kind of work](/blog/a-separate-clipboard-history-for-each-kind-of-work)
