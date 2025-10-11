export default function toggleBurgerMenu() {
  const menu = document.querySelector('.navigation-box');
  const burger = document.querySelector('.button-burger');
  const line1 = document.querySelector('.line-1');
    const line2 = document.querySelector('.line-2');
    const buttonBurgerText = document.querySelector('.button-burger-text');

  if (!menu || !burger) return;

  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    burger.classList.remove('open');
    document.documentElement.classList.remove('no-scroll'); 
      buttonBurgerText.classList.remove('open')

  } else {
    menu.classList.add('open');
    burger.classList.add('open');
    document.documentElement.classList.add('no-scroll'); 
    buttonBurgerText.classList.add('open')
  }
}