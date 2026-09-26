'use strict';

// Workspace preview on the browser extension pages. Without this script the
// first workspace stays visible; with it the workspace tabs switch the panes.
const browser = document.querySelector('.browser');
const status = document.querySelector('#workspace-status');

document.querySelectorAll('.workspace-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const workspace = tab.dataset.workspace;
    browser.dataset.workspace = workspace;
    document.querySelectorAll('.workspace-tab').forEach(other => {
      const selected = other === tab;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-panes]').forEach(panes => {
      panes.hidden = panes.dataset.panes !== workspace;
    });
    status.textContent = status.dataset.template.replace('{name}', tab.dataset.name);
  });
});
