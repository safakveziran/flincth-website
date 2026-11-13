---
title: "A Year-End Mac Reset: How to Set Up Your Mac for Focused Work"
seo_title: "How to Set Up Your Mac for Focused Work"
description: "A year-end Mac reset: clear the desktop, name the kinds of work you do, give each its own windows and clipboard, and switch between them in one step."
---

Every December I do the same thing. I look at my Mac, see forty open windows, a desktop full of screenshots and a clipboard full of things I copied in October, and I wonder how it got like this.

It got like this one small decision at a time. A window dragged here for a call, a file saved to the desktop "just for now", a browser window opened for research and never closed.

A year-end reset doesn't need a new Mac or a new system. It needs about half an hour and a few decisions made once, so you stop making them a hundred times a day. This is the order I do it in.

---

## 1. Clear the desktop, without deleting anything

The desktop is where files go when you don't want to decide where they go. Don't try to sort it all now.

- **Turn on Stacks.** Click the desktop, then choose **View → Use Stacks**. macOS piles everything by kind: screenshots in one stack, PDFs in another, images in a third. Nothing moves on disk.
- **Move the pile once.** Make a folder called *Desktop 2026*, drag everything into it, and you're done. If you need something, it's one folder away. If you never open it, you didn't need it.
- **Send new screenshots somewhere else.** Press <kbd>⇧⌘5</kbd>, open **Options**, and choose a folder under **Save to**. Your desktop stays clear next time.

A clear desktop isn't about looks. It's one less thing behind your windows asking for attention.

---

## 2. Name the kinds of work you actually do

This is the step most people skip, and it's the one that matters.

Look back over a normal week and write down the *kinds* of work, not the projects. For most people it's three to five:

- **Code** or **Design**: the editor or design tool, a terminal, the docs.
- **Write**: a writing app, notes, one browser window for references.
- **Meetings**: the calendar, the call app, a notes window.
- **Research**: a browser, a PDF reader, a notes app.
- **Admin**: mail, messages, the calendar.

Each kind of work wants different apps in front and different apps out of the way. When you mix them, every switch costs you a few minutes of dragging, resizing and hunting for the window you need.

If you only take one thing from this post, take this list. It's the map for everything below.

---

## 3. Give each kind of work its own window layout

Now decide where things go for each one. A layout doesn't have to be clever. Most of mine are two or three regions:

- **Code:** editor on the left two-thirds, terminal and docs stacked on the right.
- **Write:** the writing app in the middle, references in a narrow column beside it.
- **Meetings:** the call on one side, notes on the other.

macOS can tile a window to half or a quarter of the screen by itself. Drag a window to an edge, or use **Window → Move & Resize**. That's fine for one window at a time. We wrote up [the built-in keys and where they stop](/guides/mac/window-arrangement-shortcuts).

The catch is that you rebuild the layout by hand every time you switch. That's why I built [Flincth Workspace Manager](/mac/workspace-manager). A **setup** saves the whole desk for one kind of work: which apps belong to it, the region each one's window goes to, across one screen or several. Switch to the setup, and Flincth opens what isn't running, puts each window in its region and hides the apps that don't belong. It never quits or minimises anything; hidden apps come back exactly as you left them.

If you use more than one display, give each setup its regions on every screen. [This guide covers layouts for two displays or an ultrawide](/guides/mac/layouts-for-two-displays-and-ultrawide-monitors).

---

## 4. Keep each kind of work's clipboard separate

This one surprised me when I started doing it.

A normal clipboard history is one long list of everything you copied all day. Come back to code after an hour of writing, and the snippet you need is buried under paragraphs. Worse, it's easy to paste something from one client into another client's document.

In Flincth each setup keeps its own text clipboard history. What you copy while **Code** is active stays in Code's list; switch to **Write**, and the clipboard panel opens on Write's list. An **All** view is always one click away, so nothing is ever lost. I wrote about [why it works this way](/blog/a-separate-clipboard-history-for-each-kind-of-work).

Whatever tool you use, two habits help on their own:

- Clear your clipboard history at the end of a project.
- Never keep passwords in it. Good password managers mark what they copy as concealed, and Flincth never records those items.

---

## 5. Make switching one keystroke

A layout you have to rebuild is a layout you'll stop using. Switching has to be faster than dragging.

- In Flincth, give each setup a shortcut: <kbd>⇧⌘</kbd> plus one letter, such as <kbd>⇧⌘C</kbd> for Code and <kbd>⇧⌘W</kbd> for Write. You can also switch from the menu bar.
- Pair it with a **Focus** from Control Center if notifications pull you out. A Focus decides who can reach you; a setup decides what's on your screen.

After a week, switching stops feeling like a task. You press the keys, the desk changes, you start.

---

## 6. Keep a way back

Any system that rearranges your screen needs an undo. In Flincth that's **Not Flincth** in the menu bar: it puts your windows back where they were before your first switch, hidden apps included. Knowing it's there makes it much easier to try things. [Here's how it works](/guides/mac/restore-your-desk-with-not-flincth).

---

## What this won't fix

Honest limits, so you know what to expect:

- No app can move windows between **Mission Control desktops**, and Flincth doesn't try. It arranges the desktop you're on.
- Windows in **full screen** stay in full screen. Leave it first with <kbd>⌃⌘F</kbd>.
- Flincth moves windows through a Shortcut you install once, **Flincth Apply**, rather than asking for Accessibility access. [The setup takes a minute](/guides/mac/install-the-flincth-apply-shortcut).

{% include sale-callout.html data="mac" %}

## The short version

1. Turn on Stacks and move the desktop pile into one folder.
2. Write down the three to five kinds of work you do.
3. Give each one a window layout.
4. Give each one its own clipboard.
5. Make switching a single shortcut.

Half an hour now, and January starts with a desk that's ready for whatever you open it for.
