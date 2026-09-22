'use strict';

const desktop = document.querySelector('.desktop');
const mainContent = document.querySelector('#main-content');
const codeContent = mainContent.innerHTML;
// Copy for each setup lives in the page (#setup-data), so a translated home
// page carries its own text. The code setup reuses the markup already shown.
const setupData = JSON.parse(document.querySelector('#setup-data').textContent);
const setups = setupData.setups;
setups.code.content = codeContent;

document.querySelectorAll('.setup-option').forEach(button => {
  button.addEventListener('click', () => {
    const mode = button.dataset.mode;
    const setup = setups[mode];
    desktop.dataset.setup = mode;
    document.querySelectorAll('.setup-option').forEach(option => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('#active-app').textContent = setup.app;
    document.querySelector('#main-title').textContent = setup.title;
    document.querySelector('#side-title').textContent = setup.side;
    document.querySelector('#note-kicker').textContent = setup.kicker;
    // All HTML below comes from the page's own #setup-data block, never user input.
    document.querySelector('#note-heading').innerHTML = setup.heading;
    document.querySelector('#note-copy').innerHTML = setup.copy;
    mainContent.innerHTML = setup.content;
    document.querySelector('#setup-status').textContent = setupData.status.replace('{name}', setup.name);
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
