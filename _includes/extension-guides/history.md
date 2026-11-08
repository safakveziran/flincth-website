{% include extension-guides/vars.html %}
When you type into a pane's address field, Flincth can suggest pages you've visited before, the way {{ gb.name }}'s own address bar does. It's off until you turn it on, and it needs one extra permission: read access to {{ gb.name }}'s history.

## Turn it on

1. Click into any address field: **Search or enter a website** in an empty pane, or the address in a pane's toolbar.
2. A small menu offers **Enable history suggestions**. Click it.
3. Confirm in {{ gb.name }}'s own prompt.

From then on, matching pages appear under the field as you type: up to eight, each with its title and address{% if gb.id != "firefox" %} and the site's icon{% endif %}. Use the arrow keys and <kbd>Enter</kbd>, or click one. <kbd>Esc</kbd> closes the list.

You can also turn it on in **Settings → Browsing history suggestions**.

Flincth never asks for history access on its own: not at install, and not just because you clicked into a field. If you decline, typing an address or searching works exactly as before.

## What it reads, and what it doesn't

- It **searches** your history for what you're typing, and only inside the Flincth tab.
- It doesn't add to your history, delete from it, copy it, keep it or send it anywhere.
- Only web addresses (http and https) are suggested, and never addresses with a user name or password in them.
- In a private window there are no suggestions, and private tabs never appear in **Choose from open tabs** either.

## Turn it off

Turn off **Settings → Browsing history suggestions**. That also gives the history permission back to {{ gb.name }}. You can check it any time on {{ gb.extensions_page }}.

## Next

- [Flincth settings and backups in {{ gb.name }}]({{ g }}/settings-and-backups)
- [Split {{ gb.a_tab }} into your first Flincth workspace]({{ g }}/split-a-tab-into-a-workspace)
