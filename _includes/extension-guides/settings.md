{% include extension-guides/vars.html %}
Flincth works in {{ gb.name }} without changing a single setting. This guide covers the few worth knowing, and how to keep a copy of your workspaces.

Open **Settings** from the gear icon in the toolbar popup, or in the Flincth tab's top bar.

## Switching

**Keep inactive workspaces loaded** (on by default). Workspaces you switch away from stay loaded, so switching back is instant and pages keep their scroll position, playing video and half-typed text. The cost is memory: each pane uses about as much as {{ gb.a_tab }}.

**Workspaces kept loaded at once** (1 to 5, default 3). Past that number, the workspace you used longest ago is unloaded, and reloads the next time you switch to it.

Turn **Keep inactive workspaces loaded** off if memory is tight. Only the workspace on screen is loaded then, and pages reload each time you switch.

**Open Flincth Split View when the browser starts** (off by default). Opens the Flincth tab with your last workspace whenever {{ gb.name }} starts.

## Panes

**Suggest alternatives when a site takes longer to load** (on by default). Shows the *Trouble with this site?* prompt after a slow load, without stopping the page. See [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane).

**Ask before deleting a workspace** (on by default). Asks for confirmation before a workspace is deleted.

**Browsing history suggestions** (off by default). Suggests pages you've visited as you type a pane's address. Turning it on asks {{ gb.name }} for history access; turning it off gives it back. See [Address suggestions from your history]({{ g }}/address-suggestions-from-history).

## Language

Choose a language, or **Match your browser's language**. English fills in anything that isn't translated yet.

## Back up and move your workspaces

Your workspaces live in {{ gb.name }}'s local storage on this device. Flincth has no account and no sync, so removing the extension removes them. A backup is one file.

**Export.** Under **Backup**, click **Export workspaces**. {{ gb.name }} saves a file with every workspace's name, layout and sites. It stays on your computer; Flincth sends it nowhere.

**Import.** On the other computer, or in another browser where Flincth is installed, open **Settings → Backup**, click **Import workspaces** and choose the file.

- Imported workspaces are **added** next to the ones already there. Nothing is replaced.
- Local file bytes and analytics identifiers are not part of the export. Select missing file copies again after moving to another profile.
- Website access isn't part of the file. Each browser keeps it per device, so you'll be asked for it again on the new one.
- If the file is damaged or isn't a Flincth export, nothing is imported and your existing workspaces are left alone.

## Privacy

Usage statistics are enabled by default unless you previously disabled them. Settings opens on installation/update with an explanation and an immediate off switch; you do not need to save the switch separately. Firefox also requires its native optional technical and interaction data permission. Private contexts never send statistics. Fixed interactions and random installation/session identifiers go to Google, never workspace URLs, titles, searches, file names, paths or document contents. Turning statistics off clears local identifiers and stops future requests, not statistics already received by Google. Read the [privacy policy](/privacy#extension) for details.

## Next

- [Keyboard shortcuts for Flincth in {{ gb.name }}]({{ g }}/keyboard-shortcuts)
- [How to install Flincth in {{ gb.name }}]({{ g }}/install-flincth)
