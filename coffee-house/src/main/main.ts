import createMenuSection from '../menu/menu-section/menu-section';
import './main.css';
import createAboutSection from './sections/about/about';
import createFavoriteSection from './sections/favorite/favorite';
import createMobileAppSection from './sections/mobile-app/mobile-app';




export default function createMain(parent: HTMLElement, isMainPage = true) {
  const main = document.createElement('main');
  main.classList.add('main');
  parent.append(main);

  if (isMainPage) {
    createFavoriteSection(main);
    createAboutSection(main);
    createMobileAppSection(main);
  } else {
    createMenuSection(main);
  }
}
