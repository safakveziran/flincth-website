'use strict';

const desktop = document.querySelector('.desktop');
const mainContent = document.querySelector('#main-content');
const codeContent = mainContent.innerHTML;
const setups = {
  code: { name: 'Code', app: 'Editor', title: 'A little room to build', side: 'Notes', kicker: 'THE NEXT GOOD IDEA', heading: 'Start small.<br>Make it matter.', copy: 'A clear desk. An open mind.<br>Something worth making.', content: codeContent },
  write: { name: 'Write', app: 'Writing', title: 'A fresh page', side: 'References', kicker: 'ROOM TO THINK', heading: 'Find the words.<br>Follow the thought.', copy: 'One sentence at a time.<br>Let the rest wait.', content: '<div class="writing-preview"><small>PERSONAL NOTES / FIRST DRAFT</small><h3>The art of making space.</h3><p>Some ideas need a little quiet. A blank page, a familiar place, and the freedom to follow a thought wherever it goes.</p></div>' },
  research: { name: 'Research', app: 'Research', title: 'Follow your curiosity', side: 'Reading list', kicker: 'CONNECT THE DOTS', heading: 'A new angle.<br>A clearer picture.', copy: 'Keep the useful things close.<br>Leave room for discovery.', content: '<div class="research-preview"><small>IDEAS IN PROGRESS</small><h3>Look a little closer.</h3><div class="research-cards"><div>01 / Collect<p>Gather the thoughts that spark something.</p></div><div>02 / Connect<p>Find the patterns between your ideas.</p></div></div></div>' }
};

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
    // All HTML below comes from the fixed local templates above, never user input.
    document.querySelector('#note-heading').innerHTML = setup.heading;
    document.querySelector('#note-copy').innerHTML = setup.copy;
    mainContent.innerHTML = setup.content;
    document.querySelector('#setup-status').textContent = `${setup.name} setup active`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
