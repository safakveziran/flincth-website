'use strict';

// Reading preview on the Flincth Speed Reader page. Without this script the
// first word stays visible. With it the sample text plays in the chosen mode
// (#reader-data holds the chunks, so a translated page carries its own text).
// It never starts on its own for visitors who prefer reduced motion.
const stage = document.querySelector('.reader-stage');
const chunk = document.querySelector('#reader-chunk');
const progress = document.querySelector('#reader-progress');
const play = document.querySelector('#reader-play');
const data = JSON.parse(document.querySelector('#reader-data').textContent);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const msPerWord = 60000 / data.wpm;

let mode = 'word';
let index = 0;
let timer = null;

// The focus letter sits a little left of the middle of a word, as in the app.
function focus(word) {
  const letters = word.replace(/[^\p{L}\p{N}]/gu, '').length;
  const at = Math.max(0, Math.min(word.length - 1, Math.round((letters - 1) * 0.35)));
  const span = document.createElement('em');
  span.textContent = word[at];
  return [document.createTextNode(word.slice(0, at)), span, document.createTextNode(word.slice(at + 1))];
}

function show() {
  const chunks = data.modes[mode];
  const text = chunks[index];
  chunk.replaceChildren(...(mode === 'word' ? focus(text) : [document.createTextNode(text)]));
  progress.style.width = ((index + 1) / chunks.length * 100) + '%';
}

function delay(text) {
  const words = text.split(/\s+/).length;
  const pause = /[.,;:]$/.test(text) ? 1.6 : 1;
  return Math.max(msPerWord, words * msPerWord) * pause;
}

function tick() {
  const chunks = data.modes[mode];
  index = (index + 1) % chunks.length;
  show();
  timer = setTimeout(tick, delay(chunks[index]) + (index === chunks.length - 1 ? 900 : 0));
}

function setPlaying(on) {
  clearTimeout(timer);
  timer = null;
  play.setAttribute('aria-pressed', String(on));
  play.textContent = on ? data.pause : data.play;
  if (on) timer = setTimeout(tick, delay(data.modes[mode][index]));
}

document.querySelectorAll('.reader-mode').forEach(button => {
  button.addEventListener('click', () => {
    mode = button.dataset.mode;
    stage.dataset.mode = mode;
    document.querySelectorAll('.reader-mode').forEach(other => {
      other.setAttribute('aria-pressed', String(other === button));
    });
    index = 0;
    show();
    if (timer) setPlaying(true);
  });
});

play.hidden = false;
play.addEventListener('click', () => setPlaying(!timer));
show();
setPlaying(!reduce);
