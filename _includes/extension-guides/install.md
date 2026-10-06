{% include extension-guides/vars.html %}
The Flincth extension splits one {{ gb.name }} tab into panes, with a different site in each. Before a pane can show a site, {{ gb.name }} has to let Flincth display it. This guide covers installing the extension and that one decision.

The extension is a companion to [Flincth for Mac](/), and each works without the other.

## Install it

1. Open [Flincth on {{ gb.store_name }}]({{ store.store_url }}).
2. Click **{{ gb.store_button }}** and confirm.
{%- if gb.requirement != "" %}

{{ gb.requirement }}
{%- endif %}

Flincth is free and has nothing to buy inside it.

## Pin it to the toolbar

{{ gb.name }} tucks new extensions away. Pin Flincth so its popup is one click away:

{{ gb.pin }}

## Allow website access

Installing Flincth gives it access to no website at all. Access is asked for later, and only from your own click.
{% if gb.access == "all-sites" %}
Right after installation, Flincth opens a page titled **Enable websites in Flincth**:

- **Enable all websites** asks {{ gb.name }} for access to all websites. Confirm it in {{ gb.name }}'s own prompt. Panes can then show any site you put in them, including when a site sends you on to another address, as sign-in pages often do.
- **Not now** skips the step. You can still create workspaces, pick layouts and add sites; they just stay inactive. Flincth asks again whenever you activate a site, until access is granted.

Access is for all websites because the sites you put in panes, and the places they redirect to, can be anywhere. Flincth only uses it inside its own tab.
{% else %}
{{ gb.name }} asks one site at a time. The first time you put a site in a pane, the pane asks **Show example.com here?**

1. Click **Allow example.com**.
2. Confirm in {{ gb.name }}'s own prompt.

The site loads in the pane. Each new site asks once. If you'd rather not allow a site, you can still open it in its own window or tab; see [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane).
{% endif %}
## What access is used for, and what it isn't

- Flincth uses it to show sites **inside its own tab**. Your ordinary tabs are untouched.
- It never reads cookies, page content, passwords or anything you type into a site. Bundled code inside the panes only keeps track of each pane's address, so **Back** and **Forward** work.
- Flincth collects no data and connects to no server. Your workspaces stay in {{ gb.name }}'s local storage on your device.

Some sites still need a normal browser window for sign-in, whatever access you give. [When a site won't show in a pane]({{ g }}/when-a-site-wont-show-in-a-pane) explains what to do.

## Take access back

{{ gb.revoke }}

Revoking unloads the sites in your panes and minimises any attached windows. Your workspaces, layouts and site assignments are kept, ready for when you allow access again.

## Next

[Split {{ gb.a_tab }} into your first workspace]({{ g }}/split-a-tab-into-a-workspace).
