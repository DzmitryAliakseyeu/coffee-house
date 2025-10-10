export default function toggleBurgerMenu() {
  const menu = document.querySelector('.navigation-box');
  const burger = document.querySelector('.button-burger');
  const body = document.body;

  if (!menu || !burger) return;

  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    burger.classList.remove('open');
    // body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll'); 
  } else {
    menu.classList.add('open');
    burger.classList.add('open');
    // body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll'); 
  }
}