import './containerHeader.css';
import createButton from '../../button/button';
import createNavigation from './navigation/navigation';
import toggleBurgerMenu from './burger/burger';

export default function createContainerHeader(parent: HTMLElement) {
  const containerHeader = document.createElement('div');
  containerHeader.classList.add('container-header');
  parent.append(containerHeader);

  const headerMenu = document.createElement('div');
  headerMenu.classList.add('header-menu');
  containerHeader.append(headerMenu);

  const logo = document.createElement('a');
  logo.classList.add('logo');
  headerMenu.append(logo);
  logo.href = 'index.html';

  const logoImage = document.createElement('img');
  logoImage.classList.add('logo-img');
  logo.append(logoImage);
  logoImage.src = '../../public/logo.svg';

  const navigationBox = document.createElement('div');
  navigationBox.classList.add('navigation-box');
  headerMenu.append(navigationBox);

  createNavigation(navigationBox);

  const renderCartButton = () => {
    const oldMenuButton = navigationBox.querySelector('.button-menu');
    if (oldMenuButton) oldMenuButton.remove();
    const oldCartButton = navigationBox.querySelector('.button-cart');
    if (oldCartButton) oldCartButton.remove();

    const productsInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');
    const productsQuntityInCart = productsInLS ? productsInLS.length : 0;

    if (window.innerWidth <= 768) {
      createButton({
        parent: navigationBox,
        className: 'menu',
        action: () => {
          window.open('/pages/menu.html', '_self');
        },
        text: 'Menu',
        hasIcon: true,
      });

      createButton({
        parent: navigationBox,
        className: 'cart',
        action: () => {
          window.open('/pages/cart.html', '_self');
        },
        text: `<p class="burger-link text-dark cart-title">Cart</p><span class="cart-icon"></span>`,
        hasIcon: false,
        isHtml: true,
      });
    } else {
      createButton({
        parent: navigationBox,
        className: 'cart',
        action: () => {
          window.open('/pages/cart.html', '_self');
        },
        text: `<span class="cart-icon"></span> <p class="link-and-button text-dark cart-quantity">${productsQuntityInCart}</p>`,
        hasIcon: false,
        isHtml: true,
      });

      createButton({
        parent: navigationBox,
        className: 'menu',
        action: () => {
          window.open('/pages/menu.html', '_self');
        },
        text: 'Menu',
        hasIcon: true,
      });
    }
  };

  renderCartButton();
  window.addEventListener('resize', renderCartButton);

  const cartButtonBlock = document.querySelector(
    '.button-cart-text',
  ) as HTMLElement;

  let userSignIn = JSON.parse(
    JSON.stringify(localStorage.getItem('signInUser')),
  );
  let orders = JSON.parse(JSON.stringify(localStorage.getItem('orders')));

  if (!sessionStorage.getItem('firstLoadDone') && !userSignIn) {
    localStorage.clear();
    sessionStorage.setItem('firstLoadDone', 'true');
    cartButtonBlock.classList.add('button-cart-text-hidden');
  } else {
    if (userSignIn || orders) {
      cartButtonBlock.classList.remove('button-cart-text-hidden');
    } else {
      cartButtonBlock.classList.add('button-cart-text-hidden');
    }
  }

  createButton({
    parent: headerMenu,
    className: 'burger',
    action: () => {
      toggleBurgerMenu();
    },
    text: '<span class="burger-line line-1"></span> <span  class="burger-line line-2"></span>',
    hasIcon: false,
    isHtml: true,
  });
}
