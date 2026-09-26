'use strict';

// Closes the header's Products menu (a <details> element) on a click outside
// it, on Escape, and when another part of the page takes focus.
const menu = document.querySelector('.products-menu');

if (menu) {
  const close = () => { menu.open = false; };
  document.addEventListener('click', event => {
    if (menu.open && !menu.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      close();
      menu.querySelector('summary').focus();
    }
  });
  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) close();
  });
}
