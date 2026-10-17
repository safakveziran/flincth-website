---
title: "Why Some Websites Go Blank in a Split Screen Browser Extension"
seo_title: "Why Websites Go Blank in a Split Screen Extension"
description: "Split screen extensions show sites inside frames, and some sites refuse frames or appear logged out in them. Here is why, and how Flincth Split View works around it."
product: split-view
og_image: /assets/og-extension.png
og_image_alt: og_image_alt
---

If you have tried a split screen extension for Chrome, Firefox or Edge, you have probably seen it happen.

You put four sites side by side. Three of them load. The fourth is a blank grey box, or an error, or a login page for an account you are already signed in to in the next tab.

When we built [Flincth Split View](/browser/split-view/), this was the first problem we hit, and the one that shaped the whole extension. This post explains why it happens and what we did about it.

---

## How a split screen extension shows a site

A browser tab shows one page. To put several sites in one tab, an extension opens its own page and divides it into panes. Each pane holds a **frame**: a small window into another website, the same mechanism a page uses to embed a video or a map.

That is what makes a split screen feel like one tab. It is also where the trouble starts, because websites get a say in whether they can be framed.

---

## Some sites refuse to be framed

Many sites send a header that tells the browser "don't show me inside another page." It's a sensible protection. It stops a malicious page from loading your bank invisibly and tricking you into clicking its buttons.

The browser obeys. The frame stays empty, and the pane looks broken.

A split screen extension can work around this, but only by asking for website access. With it, Flincth removes those framing headers **only for frames inside its own tab**. Every other tab, and every other page that tries to frame the same site, still gets the site's protection.

That is why Flincth asks for website access at all. It doesn't read the pages, their cookies or anything you type into them. It only needs to let the frame load.

---

## Some sites load, but you're logged out

The second problem is subtler. The site loads, but it asks you to sign in, even though you signed in an hour ago.

Browsers increasingly treat a site inside another page's frame as a separate context, with its own storage. That's how they stop advertisers from following you across the web, and it's a good thing. But to a site you use with your account, the frame can look like a stranger. Sometimes your session comes through. Sometimes it doesn't, and you can't fix it from inside the frame.

We could have tried to fight that: ask for more permissions, copy cookies around, loosen the browser's protections.

We decided not to. A split screen tool shouldn't weaken the very rules that keep your accounts safe.

---

## Moving the site instead of fighting the browser

What we did instead is move the site to a place where your session already works.

Each pane in Flincth Split View can show its site in one of three ways:

- **In the pane.** The site loads in a frame inside the split view tab. This is the default and the smoothest: one tab, everything in it.
- **In an attached window.** The site runs in a real browser window, lined up exactly over its pane. Because it's a normal window, the site behaves exactly as it would in a normal tab: you stay signed in, and nothing refuses to load.
- **As a launcher.** The pane shows the site's name and an Open button that opens it in a normal tab. Useful for a site that works best on its own, in its own tab.

If a site in a pane comes up blank, logged out or very slow, the pane's **Site not working?** menu offers the other options: keep showing it, try again, open it in an attached window, or open it in a tab. Flincth never switches a pane on its own. You decide.

---

## What an attached window can and can't do

An attached window is a clever trick, but it's still a window, and we'd rather say so up front:

- It shows up in your taskbar or Dock and in your app switcher like any other window.
- It appears separately in screenshots of a single window.
- Your operating system sets a minimum window width. A very narrow pane may be smaller than that, and the pane tells you when the window can't fit.
- Lining up can lag a moment behind when you drag a divider.
- On several displays, it follows the display that holds the split view tab.

What it does well: when you switch to another tab, or to a different workspace, attached windows get out of the way, and they come back into place when you return. If you close the split view tab, they stay open, because they may hold work you haven't finished.

---

## Switching without reloading

The reason to put sites side by side in the first place is that you come back to the same arrangement again and again: a dashboard, a document, a chat and a video for work; a recipe and a timer for cooking.

Flincth saves each arrangement as a **workspace** and switches between them with a click or a keyboard shortcut you choose. By default, the panes of the workspaces you used recently stay loaded in the background, so switching back is instant: your scroll position, half-written message and video position are where you left them. If you'd rather save memory, you can turn that off, and pages reload when you return.

---

## What it doesn't do

A split screen extension sees which sites you put in its panes, so here is what Flincth Split View doesn't do with that:

- It collects no data and makes no network requests of its own. There are no analytics in it.
- Your workspaces, layouts and the addresses in your panes are stored in your browser, on your device.
- Website access is optional. Without it, you can still build and arrange workspaces; their sites simply stay inactive until you allow it. You can take the access back in your browser's extension settings at any time.

Removing the extension removes everything it stored.

---

## Try it

Flincth Split View is free for Chrome, Firefox and Microsoft Edge. Pick your browser on the [Split View page](/browser/split-view/) to install it, or read the [guides](/guides/) for setting up your first workspace.

If a site in your workspace refuses to cooperate, I'd like to hear which one. Those are exactly the cases this design exists for.
