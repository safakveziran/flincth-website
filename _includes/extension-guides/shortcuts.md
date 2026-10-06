{% include extension-guides/vars.html %}
Switching workspaces with a click is fine. Switching with a key is better. Flincth has two kinds of shortcut, because {{ gb.name }} gives extensions two kinds, and they work in different places.

| | Shortcuts that work anywhere | Shortcuts inside Flincth |
| --- | --- | --- |
| **How many** | Four slots | As many as you like |
| **Where they work** | Anywhere in {{ gb.name }}, even while typing in a pane | While the Flincth tab has focus, but not inside a pane's site |
| **Who sets the keys** | {{ gb.name }} | You, in Flincth |

Put the workspaces you switch to most into the four slots. Give the rest their own keys.

## Shortcuts that work anywhere

Flincth has four slots, numbered 1 to 4. Each slot opens one workspace.

**The keys.** Slots 1 and 2 come with keys:

- On a Mac: <kbd>⌘⇧1</kbd> and <kbd>⌘⇧2</kbd>.
- On Windows and Linux: <kbd>Ctrl+Shift+1</kbd> and <kbd>Ctrl+Shift+2</kbd>.

Slots 3 and 4 have no key until you give them one. If another extension already uses a combination, {{ gb.name }} may leave that slot without a key.

**Which workspace each slot opens.** A new workspace takes the first free slot on its own. To change it, open **Settings** (the gear in the toolbar popup) and use **Shortcuts that work anywhere**: pick a workspace for each slot, or **Nothing**.

**Changing the keys.** Only {{ gb.name }} can change these keys. In the same section, click **Change the keys in your browser**, or go to {{ gb.shortcuts_page }}.
{%- if page.platform == "firefox" %} If {{ gb.name }} can't open that screen for you, Flincth says so and shows the same path.{% endif %}

## Shortcuts inside Flincth

Any workspace can have its own key, and there's no limit on how many.

**Set one** in any of these places:

- When you create a workspace, in the **Shortcut** field.
- In the toolbar popup: hover over a workspace, click the pencil (**Rename or set a shortcut**).
- In **Settings → Shortcuts inside Flincth**.

Click **Set a shortcut** and press the keys. Press **Esc** to stop recording.

**Rules.**

- It needs <kbd>Ctrl</kbd>, <kbd>Alt</kbd> or <kbd>⌘</kbd>, so it can't fire while you type. A function key such as <kbd>F6</kbd> works on its own.
- Keys {{ gb.name }} already uses, and editing keys such as <kbd>Ctrl+C</kbd>, are refused with a reason.
- A key belongs to one workspace. If you choose one another workspace has, Flincth says which, and moves it when you save.

**Where it works.** These keys work while the Flincth tab has focus. Once you click into a site in a pane, your keystrokes belong to that site, so the key won't fire until you click the Flincth tab's own bar again. That's what the four slots are for.

## Other keys worth knowing

- <kbd>F2</kbd> renames the selected workspace.
- <kbd>Shift</kbd> + <kbd>←</kbd> / <kbd>→</kbd> moves the selected workspace tab left or right.
- With a divider focused, the arrow keys resize panes by 2%, or 10% with <kbd>Shift</kbd>.

## Next

- [Flincth settings and backups in {{ gb.name }}]({{ g }}/settings-and-backups)
- [Split {{ gb.a_tab }} into your first workspace]({{ g }}/split-a-tab-into-a-workspace)
