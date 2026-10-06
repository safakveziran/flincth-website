{% include extension-guides/vars.html %}
Flincth works in {{ gb.name }} without changing a single setting. This guide covers the few worth knowing, and how to keep a copy of your workspaces.

Open **Settings** from the gear icon in the toolbar popup, or in the Flincth tab's top bar.

## Switching

**Keep inactive workspaces loaded** (on by default). Workspaces you switch away from stay loaded, so switching back is instant and pages keep their scroll position, playing video and half-typed text. The cost is memory: each pane uses about as much as a {{ gb.name }} tab.

**Workspaces kept loaded at once** (1 to 5, default 3). Past that number, the workspace you used longest ago is unloaded, and reloads the next time you switch to it.

Turn **Keep inactive workspaces loaded** off if memory is tight. Only the workspace on screen is loaded then, and pages reload each time you switch.

**Open Flincth when the browser starts** (off by default). Opens the Flincth tab with your last workspace whenever {{ gb.name }} starts.

## Panes

**Suggest alternatives when a site takes longer to load** (on by default). Shows the *Trouble with this site?* prompt after a slow load, without stopping the page. See [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane).

**Ask before deleting a workspace** (on by default). Asks for confirmation before a workspace is deleted.

## Language

Choose a language, or **Match your browser's language**. English fills in anything that isn't translated yet.

## Back up and move your workspaces

Your workspaces live in {{ gb.name }}'s local storage on this device. Flincth has no account and no sync, so removing the extension removes them. A backup is one file.

**Export.** Under **Backup**, click **Export workspaces**. {{ gb.name }} saves a file with every workspace's name, layout and sites. It stays on your computer; Flincth sends it nowhere.

**Import.** On the other computer, or in another browser where Flincth is installed, open **Settings → Backup**, click **Import workspaces** and choose the file.

- Imported workspaces are **added** next to the ones already there. Nothing is replaced.
- Website access isn't part of the file. Each browser keeps it per device, so you'll be asked for it again on the new one.
- If the file is damaged or isn't a Flincth export, nothing is imported and your existing workspaces are left alone.

## Privacy

Flincth collects no data and connects to no server. The settings page says so too, and the code is published unobfuscated so anyone can check. Read the [privacy policy](/privacy) for the details.

## Next

- [Keyboard shortcuts for Flincth in {{ gb.name }}]({{ g }}/keyboard-shortcuts)
- [How to install Flincth in {{ gb.name }}]({{ g }}/install-flincth)
