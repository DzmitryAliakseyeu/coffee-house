
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
