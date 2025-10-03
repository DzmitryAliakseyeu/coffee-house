import './main.css';
import createAboutSection from './sections/about/about';
import createFavoriteSection from './sections/favorite/favorite';
import createMobileAppSection from './sections/mobile-app/mobile-app';

export default function createMain(parent) {
  const main = document.createElement('main');
  main.classList.add('main');
  parent.append(main);

  createFavoriteSection(main);
  createAboutSection(main);
  createMobileAppSection(main)
}
