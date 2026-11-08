{% include extension-guides/vars.html %}
A pane normally shows a site with your {{ gb.name }} sign-in: if you're signed in to a site in a normal tab, you're signed in to it in the pane too. **Separate session** shows a pane without those existing logins, so you can sign in there with a different account, or see a site as a signed-out visitor, next to your usual account in another pane.

## Turn it on for a pane

1. Hover over the pane so its toolbar lights up.
2. Click the **Separate session** button (a person with a cross).
3. The pane reloads, and a line under its toolbar says *Separate session · Uses a different login from your browser*.

Sign in there as you like. To go back, click the same button again; the pane reloads with your normal {{ gb.name }} session.

The button only appears on a pane that shows its site inside the pane, and only for web addresses (http and https).

## What to expect

- **It isn't incognito.** The pane's address is still saved with your workspace, and history suggestions keep working.
- **It lasts until the Flincth tab reloads.** Reload the tab, or restart {{ gb.name }}, and you'll need to sign in again.
- **Panes of the same site share it.** Two separate-session panes showing the same site in one workspace see the same session.
- **Pop-ups are blocked**, and the pane can't be opened as a window or in a tab while it's on. Sites that sign you in through a pop-up won't work here.
- **Flincth doesn't touch your cookies.** {{ gb.name }} itself keeps the pane apart; Flincth never reads or copies a site's cookies to do it.

## In Firefox

Firefox doesn't support separate sessions inside a pane, so the button doesn't appear there. A workspace imported from {{ gb.name }} with a separate-session pane shows **Use browser session** in Firefox; click it to load the site normally.

## Next

- [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane)
- [Split {{ gb.a_tab }} into your first Flincth workspace]({{ g }}/split-a-tab-into-a-workspace)
