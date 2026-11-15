{% include extension-guides/vars.html %}
Flincth Split View 1.1.0 can put local images, HTML, PDF and text files beside your websites in {{ gb.name }}.

## Choose or drop a file

1. Open a workspace and select an empty pane.
2. Click **Choose local file**, or drag a supported file from your computer onto a pane. Dropping onto a loaded pane replaces that pane’s assignment.
3. The file opens as a local copy, up to **50 MB per file**.

The copy stays in the extension’s local IndexedDB and remains available after restarting in the same browser profile. It is not uploaded to Flincth or Analytics.

## HTML previews and original files

A copied HTML file is a **static preview**. Scripts, forms and top navigation are blocked, and neighbouring images or stylesheets are not copied with it.

To use the original HTML with its scripts and relative resources, paste its full filesystem path or `file:///` URL into the pane address field. This requires optional local-file permission.

{% if page.platform == 'firefox' %}
Follow Firefox’s permission prompt for local files when available. If Firefox blocks the original file, use **Choose local file** for a static copy or open the original in a normal browser tab.
{% else %}
Open {{ gb.extensions_page }}, find **Flincth Split View → Details**, and turn on **Allow access to file URLs** when needed. Flincth does not change this browser switch automatically.
{% endif %}

Flincth does not scan directories or inject its website navigation code into local files. The original file’s scripts may run when you choose to open that original URL.

## Backups and moving browsers

Workspace exports contain file references, **not the document bytes**. After moving a workspace to another browser or profile, select the local copy again if it is missing.

Removing the extension or clearing its data removes these copies. Keep your original documents and back them up separately. File names, paths and contents are never included in usage statistics.
