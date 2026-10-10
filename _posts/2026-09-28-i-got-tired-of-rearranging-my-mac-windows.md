---
title: "I Got Tired of Rearranging My Mac Windows, So I Built Flincth"
seo_title: "Tired of Rearranging Mac Windows, I Built Flincth"
description: "Why I stopped thinking about individual windows and started thinking about entire workspaces instead."
medium_url: https://medium.com/@support_9084/i-got-tired-of-rearranging-my-mac-windows-so-i-built-flincth-7046bff12538
---

I spend a significant part of my day working on a Mac with multiple monitors.

It’s a setup I really enjoy. More screen space means I can keep my editor open, have a browser available for research, leave a terminal visible, and still have room for everything else I need throughout the day.

At least, that’s the theory.

In reality, I noticed that I was spending a surprising amount of time managing the setup itself.

Every time I changed what I was working on, my desktop needed to change with me.

When I was coding, I wanted one arrangement.

When I was researching something, I wanted another.

For meetings, writing, planning, or everyday tasks, I wanted something completely different.

And every time I switched context, I found myself doing the same thing:

Opening apps.

Moving windows.

Resizing them.

Dragging them between monitors.

Trying to remember where everything was supposed to go.

Then doing it all over again a few hours later.

Eventually I started wondering:

Why am I rebuilding the same desktop environments every day?

That question eventually became Flincth.

## Window Management Wasn’t Really My Problem

There are already plenty of great window management tools for macOS.

They can snap a window to the left side of the screen, move it to another display, maximize it, split the screen into sections, and perform all kinds of useful window operations.

But I realized that my problem was slightly different.

I didn’t really want to manage a window.

I wanted to manage what I was doing.

Consider a typical coding setup.

I might want:

- my IDE on the main display
- Terminal next to it
- documentation open in a browser
- another browser window on the second monitor
- communication tools somewhere accessible

When I stop coding and start researching something, the ideal arrangement changes.

Now I might want:

- a large browser window
- Notes
- reference material
- perhaps another browser profile
- fewer development tools taking up space

The individual windows aren’t the important part.

The relationship between the apps, their positions, the displays, and the task I’m doing is what matters.

That led me to a different way of thinking about desktop organization.

Instead of asking:

Where should this window go?

I wanted to ask:

What should my Mac look like when I’m doing this kind of work?

That became the core idea behind Flincth.

## Workspaces Instead of Windows

Flincth is built around workspaces.

A workspace represents an environment you use for a particular activity.

For example:

**Coding**

IDE + Terminal + browser arranged across your displays.

**Research**

Browser + Notes + reference applications.

**Daily**

Mail + Calendar + browser.

**Writing**

Your writing application with research material positioned alongside it.

You configure the environment once.

Then, instead of rebuilding it manually the next time you need it, you switch to that workspace.

Flincth takes care of arranging the applications and windows according to the layout you created.

The goal is simple:

Your desktop should adapt to what you’re doing – not the other way around.

## Multi-Monitor Setups Made the Problem More Obvious

The idea became particularly useful for me because I work with multiple displays.

A single-monitor desktop can become messy.

A multi-monitor desktop can become very messy.

Once applications start moving between displays, restoring a setup manually becomes increasingly annoying.

Maybe your IDE belongs on your main monitor.

Your browser belongs on another.

Terminal needs to sit next to the IDE.

Another application needs a smaller section of the secondary display.

You can absolutely arrange all of this manually.

The problem is that you have to keep doing it.

And that’s the part I wanted Flincth to eliminate.

A workspace isn’t tied to a single window or necessarily a single display.

It’s intended to represent the environment across your setup.

That means switching what you’re doing can also mean switching how your entire multi-monitor setup is organized.

## Context Switching Has a Small Cost – Repeated Constantly

Moving a few windows doesn’t sound like a serious productivity problem.

And individually, it isn’t.

Dragging a window takes seconds.

Opening an application takes seconds.

Resizing something takes seconds.

But the interesting part is how frequently those tiny interruptions happen.

You’re working on something.

You need to switch tasks.

Now you start preparing your computer for the new task.

Move this.

Open that.

Find another window.

Move it to the other monitor.

Resize it.

Close something else.

And only then do you actually start working.

The cost isn’t just the seconds spent dragging windows.

It’s the interruption.

I wanted switching environments to feel closer to changing modes than reorganizing a desk.

One shortcut.

New workspace.

Continue working.

## Then I Realized the Clipboard Has the Same Problem

While building Flincth, another problem became obvious.

The clipboard is also usually treated as one giant global stream.

You copy some code.

Then a URL.

Then something from Slack.

Then a paragraph from an article.

Then another piece of code.

A traditional clipboard history remembers all of it chronologically.

That’s useful, but it ignores context.

If I’m working inside a coding workspace, the clipboard items I’m interested in are often related to that work.

If I switch to research, the useful clipboard context changes too.

So I added workspace-specific clipboard history.

Each workspace can maintain its own text clipboard history.

That means the workspace doesn’t just organize what’s visible on your screens.

It can also help organize some of the temporary information associated with that activity.

This turned out to fit naturally with the original idea behind Flincth:

Different kinds of work have different contexts.

## I Wanted It to Feel Like a Mac App

Another decision I made early was that Flincth should feel at home on macOS.

I didn’t want the product to feel like a web application placed inside a desktop window.

It’s designed as a native Mac utility and lives close to the way you already interact with macOS.

Workspaces can be accessed from the menu bar, and keyboard shortcuts make it possible to switch setups without interrupting your workflow.

I wanted Flincth to stay out of the way until you need it.

Configure your workspaces.

Use your Mac.

Switch when necessary.

That’s it.

## Local First

There was also a question I kept asking while building features:

Does this actually need a server?

For most of what Flincth does, the answer was no.

Your workspace configuration belongs on your Mac.

Your clipboard history definitely doesn’t need to travel through somebody else’s server just to provide its basic functionality.

So Flincth doesn’t require an account or cloud service for these features.

Workspace and clipboard data stay locally on the Mac.

Apart from being a privacy decision, I like the simplicity of this approach.

Install the application.

Configure it.

Use it.

No account creation before you can organize your own desktop.

## Why I Didn’t Make It a Subscription

Subscriptions make sense for many products.

Services with ongoing infrastructure costs, constantly changing content, cloud processing, collaboration platforms, and other continuously delivered services can have very legitimate reasons for recurring pricing.

But I didn’t feel that model made sense for Flincth.

It’s a Mac utility.

You buy it.

You use it.

So I decided to launch Flincth as a one-time purchase rather than a subscription.

I wanted the business model to be as straightforward as the product itself.

## Building the Product Was Only Half the Experiment

One of the more interesting things I’ve learned from launching Flincth is that building a product and getting people to discover a product are completely different disciplines.

As a developer, it’s tempting to think mostly about the first part.

You identify a problem.

You design something.

You write the code.

You fix bugs.

You polish the interface.

Eventually you reach the magical moment where the application works.

Then you ship it.

And suddenly you discover another problem:

Nobody knows it exists.

Flincth is now live on the Mac App Store, which means I’ve moved from the development phase into a completely different experiment: distribution.

I’m starting small.

I’m learning about App Store search optimization.

I’m talking to Mac users.

I’m sharing the story behind the product.

I’m experimenting with communities where people care about Mac productivity.

And most importantly, I’m trying to understand how real users actually use workspaces.

Because there is a big difference between designing something for your own workflow and watching other people incorporate it into theirs.

## The First 100 Users

Right now, I’m much more interested in the first 100 users than the first 100,000.

Those first users can answer questions analytics never will.

Do people understand the workspace concept immediately?

What workspaces do they create?

Do they primarily use Flincth with multiple monitors or a single display?

How often do they switch?

Which applications cause problems?

Does workspace-specific clipboard history actually change how they work?

What’s missing?

Those answers will shape where Flincth goes next.

That’s one of the things I find exciting about building an independent product.

The application that’s available today doesn’t have to represent the final idea.

It’s the starting point.

## What I Learned From Building Flincth

The biggest lesson so far isn’t technical.

It’s that small frustrations are interesting.

We naturally learn to tolerate repetitive actions on our computers.

Move this window.

Resize that one.

Open these three applications.

Arrange them again tomorrow.

None of those actions is painful enough individually to make us stop.

But when something happens dozens or hundreds of times, it’s worth asking a simple question:

Why am I still doing this manually?

Flincth started with that question.

I don’t think window management itself is the interesting problem anymore.

The more interesting question is how our computers can understand the different contexts in which we use them.

Coding isn’t just a collection of windows.

Research isn’t just another collection of windows.

They’re environments.

And I think our desktops should be able to switch between those environments as easily as we switch between tasks.

That’s what I’m trying to build with Flincth.

## Flincth is now available for macOS

If you work with multiple monitors, frequently switch between different kinds of work, or simply find yourself rebuilding the same desktop layouts every day, I’d love to hear how you currently handle it.

Website: [flincth.com](https://flincth.com)

You can find Flincth – Workspace Manager on the Mac App Store:

[Flincth on the Mac App Store](https://apps.apple.com/us/app/flincth-workspace-manager/id6809227474)

And if you try it, I’m especially interested in one question:

What workspace would you create first?
