{% include extension-guides/vars.html %}
Most sites display inside a Flincth pane without any fuss. A few don't:

- Some sites **refuse to be shown inside another page** at all.{% if gb.access == "per-site" %} In {{ gb.name }}, the pane simply stays blank.{% else %} The pane stays blank or shows an error.{% endif %}
- Some keep you **signed in** with storage that an embedded view can't reach. The pane shows the site, but as if you were signed out.

Flincth doesn't try to force either. It gives each pane three ways to show its site, and you choose.

| Mode | What you see | Sign-in |
| --- | --- | --- |
| **Inside the pane** | The site, embedded in the tab | Depends on the site |
| **Attached window** | A real {{ gb.name }} window lined up over the pane | Exactly as in a normal tab |
| **Opens in a tab** | A card in the pane that opens the site in a normal tab | Exactly as in a normal tab |

## When a site is slow

If a site hasn't finished loading after about eight seconds, the pane asks **Trouble with this site?** and offers:

- **Keep showing this pane**, if it's just slow. The page keeps loading either way.
- **Try again**.
- **Open as a window**.
- **Open in a tab**, which opens the site in a normal {{ gb.name }} tab and leaves the pane as it is.

You can turn this prompt off in **Settings → Suggest alternatives when a site takes longer to load**.
{% if gb.access == "per-site" %}
A pane that stays blank in {{ gb.name }} won't always trigger this prompt, because {{ gb.name }} doesn't report a blocked page as slow. If a pane stays empty, open the site as a window.
{% endif %}
## Open it as an attached window

Click **Open as a window** in the pane's toolbar.

The site opens in a real {{ gb.name }} window placed exactly over its pane. It behaves as it does in an ordinary tab, with the same session and the same sign-in, and it stays part of your workspace:

- It **follows its pane** when you resize the split.
- It **minimises** when you switch to another tab or another workspace, and comes back when you return.
{%- if gb.follows_moves %}
- It **follows the browser** when you move the {{ gb.name }} window.
- If you **nudge it** slightly, it snaps back onto its pane. Move it somewhere else on purpose and it stays where you put it.
{%- else %}
- If you move the {{ gb.name }} window or nudge the attached window, put it back yourself. {{ gb.name }} doesn't tell extensions when a window moves, so Flincth can't follow it. Resizing the split lines it up again.
{%- endif %}

Because it's a real window, it also appears in your window switcher and in screenshots of your screen.

**Narrow panes.** Your operating system won't make a window narrower than about 500 pixels. If a pane is smaller than that, the pane says so, and the window overlaps its neighbours slightly. Widen the pane, or use fewer panes in that row.

**Going back.** To try the site inside the pane again, click **Show this site inside the pane instead** in its toolbar.

**If you close the window.** The pane says *Its window is closed* and offers **Open the window**. Flincth never reopens a window you closed on purpose.

**If you close the Flincth tab.** Attached windows stay open, in case they hold work you haven't finished. The next time you open Flincth, it picks them up and lines them up with their panes again.

## Open it in a tab

When a pane says *example.com will not display here*, click **Open in a tab**. On a pane whose site runs in an attached window, the same choice is **Open in a tab instead**.

The pane turns into a card saying *example.com opens in a normal tab*. Click **Open in a tab** on the card whenever you need the site.

This is the simplest option for a site you only check now and then.

## Why Flincth doesn't do more

Getting round a site's refusal or reaching its sign-in from inside another page would mean reading your cookies or weakening {{ gb.name }}'s security. Flincth does neither. Moving the site into a real window, where its sign-in already works, solves the same problem without touching either.

## Next

- [Keyboard shortcuts for Flincth in {{ gb.name }}]({{ g }}/keyboard-shortcuts)
- [Flincth settings and backups in {{ gb.name }}]({{ g }}/settings-and-backups)
