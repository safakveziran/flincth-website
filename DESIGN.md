---
name: Flincth website
description: Dark, calm product site for a Mac utility and its browser extension
colors:
  paper: "#090e18"
  surface: "#111b2b"
  raised: "#19253a"
  line: "#273347"
  ink: "#edf3ff"
  muted: "#a5b3ca"
  accent-text: "#80aaff"
  accent-heading: "#89b2ff"
  action: "#235cec"
  action-hover: "#326af4"
  status: "#6ed8b2"
  focus: "#ffb52f"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI Variable Text, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(45px, 5.5vw, 76px)"
    fontWeight: 650
    lineHeight: 1.075
    letterSpacing: "-0.035em"
  section:
    fontSize: "clamp(34px, 4vw, 52px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontSize: "17px"
    lineHeight: 1.65
  small:
    fontSize: "13px"
rounded:
  control: "10px"
  card: "24px"
  panel: "28px"
  pill: "100px"
spacing:
  gutter-desktop: "40px"
  gutter-phone: "18px"
  section: "105px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "16px 23px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  nav-cta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  status-line:
    backgroundColor: "#1c2b44"
    textColor: "{colors.ink}"
    rounded: "9px"
    padding: "16px 23px"
---

# Design System: Flincth website

## Overview

A quiet, dark navy site for a tidy Mac utility. The product is about order, so
the page is ordered: one accent, generous space, headings that carry each
section on their own. Structure lives in `styles.css`; every colour of the
dark edition is in `dark.css`, which overrides it.

## Colors

### Primary
`action` (#235cec) fills the one primary button per view; `accent-text` and
`accent-heading` are the same blue read as text on the dark ground.

### Neutral
`paper` is the page, `surface` and `raised` are cards and controls, `line` is
every hairline. `ink` for headings and primary text, `muted` for body copy.

### Named Rules
- **One accent.** Blue is the only hue. `status` green appears only in the
  "Coming to…" line, where it means *not released yet*.
- **Focus is amber** (#ffb52f), the one colour that never appears elsewhere.

## Typography

The platform's own system face, on purpose: Flincth is a Mac product and SF Pro
is the Mac's voice (Segoe UI and Roboto elsewhere). No web font is loaded.

### Hierarchy
- Display (h1): two sentences; the second is a blue `<span>` on its own line.
- Section (h2) and card (h3) headings: no `<br>`, `text-wrap: balance`.
- Body 17 px, 65–75 characters per line. Functional text never below 11 px.

## Layout

Centred hero, then full-width sections inside a 1200 px wrap. Section header =
heading with its paragraph stacked below. Feature grid 1.12fr/1fr, collapsing
to one column under 700 px. Footer: brand plus three link groups.

## Elevation & Depth

Neutral, offset shadows only (`0 12px 24px -8px` family). No coloured glows or
halos on the page itself; the gradients inside the illustrated desktop are the
illustration's wallpaper.

## Shapes

10 px controls, 24 px cards, 28 px closing panel, full pill for the header CTA.

## Components

### Buttons
Primary: filled blue. The "Notify me at launch" button turns into an outlined
pressed state once subscribed. Text links carry an arrow and 8 px vertical
padding for touch.

### Status line
"Coming to the Mac App Store" and its extension variants: a non-interactive
chip with the green dot. It stands in for the notify button where web push is
unsupported.

### Illustrated previews
The home desktop and the extension browser are HTML/CSS illustrations,
always captioned as such. Replace them with real screenshots when they exist.

### Navigation
Header: wordmark, Products menu (`<details>`), in-page links, one CTA.

## Do's and Don'ts

### Do:
- Let the heading carry the section; one message per section.
- State limits plainly next to the benefit.
- Keep one primary action per view, with one label per intent.

### Don't:
- Eyebrows or kickers above headings (the only exceptions carry information:
  the product badge on extension pages and the 404 error code).
- Numbered labels unless the order matters (the three setup steps do).
- Decorative dots, coloured glows, radial halos, gradient text, em dashes.
- Emoji or Unicode glyphs as icons.
- Invented numbers, testimonials or logos.
