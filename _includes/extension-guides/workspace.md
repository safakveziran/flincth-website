{% include extension-guides/vars.html %}
A **workspace** is one {{ gb.name }} tab divided into panes, with a site in each: a dashboard beside a document, a chat under a video. Flincth saves the whole arrangement, so you build it once and switch back to it whenever you like.

Install the extension first: [How to Install Flincth in {{ gb.name }}]({{ g }}/install-flincth).

## 1. Create a workspace

Click the Flincth icon in the toolbar, then **New workspace**. Fill in:

- **Name:** something short, such as *Work*.
- **Layout:** how the tab starts out divided.
- **Shortcut:** optional; you can set it later. See [Keyboard shortcuts for Flincth in {{ gb.name }}]({{ g }}/keyboard-shortcuts).

Click **Create**. Flincth opens its tab with the new workspace in it.

Flincth always uses a single tab. Opening it again takes you back to the same one rather than opening a second.

Already in the Flincth tab? The **+** beside the workspace tabs at the top creates a two-column workspace named *Untitled* straight away.

## 2. Choose a layout

The starting layouts are **Single**, **Two columns**, **Two rows**, **Wide left, two right**, **Three columns** and **Four grid**.

To change it later, open the pane-count menu in the top bar (it reads *2 panes*, *3 panes* and so on):

- **Add a pane** splits the largest pane in two.
- **Replace the layout** switches to another starting layout. The sites you've assigned keep their order. If the new layout has room for fewer sites, Flincth tells you how many would be removed before doing anything.

## 3. Split, remove and resize panes

Every pane has a thin toolbar at the top. From it you can:

- **Split left / right** or **Split top / bottom**, to divide that pane in two.
- **Remove this pane**.

A workspace holds up to eight panes.

To resize, drag the divider between two panes. It catches on an even split, on thirds and quarters, and on dividers in other rows, so separate splits line up exactly. A small label beside the cursor says what it caught. Hold **Alt** while dragging to place it freely.

You can also click a divider and use the arrow keys: 2% per press, or 10% with **Shift**. The keyboard never snaps.

## 4. Put a site in each pane

An empty pane offers two ways:

- Type an address into **Search or enter a website** and press **Add site**. Plain words search with {{ gb.name }}'s default search engine.
- Click **Choose from open tabs** and pick one of the tabs you already have open.
{% if gb.access == "all-sites" %}
If you skipped website access when you installed Flincth, {{ gb.name }} asks for it now. Without it, the site stays saved in the pane but doesn't load.
{% else %}
The first time you add a site, the pane asks **Show example.com here?** Click **Allow example.com** and confirm in {{ gb.name }}'s prompt.
{% endif %}
The site loads inside the pane. Links you click stay in the pane, and the pane's toolbar has **Back**, **Forward** and **Reload**.

If a site stays blank or asks you to sign in when you're already signed in, see [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane).

## 5. Name, reorder and switch

- **Rename:** double-click the workspace's tab at the top, or select it and press **F2**. Press Enter to save, Escape to cancel.
- **Reorder:** drag a tab sideways, or use **Shift** + **←** / **→**.
- **Switch:** click a tab at the top of the Flincth tab, or a workspace in the toolbar popup.

Workspaces you switch away from stay loaded, a few at a time, so a half-written reply or a scrolled-down page is still there when you come back.

## 6. Delete a workspace

In the toolbar popup, hover over the workspace and click the delete icon. Its layout and site assignments are removed, and any attached windows it owns are closed.

## Next

- [Keyboard shortcuts for Flincth in {{ gb.name }}]({{ g }}/keyboard-shortcuts)
- [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane)
