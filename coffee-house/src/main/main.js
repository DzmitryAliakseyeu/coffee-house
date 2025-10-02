import './main.css';
import createFavoriteSection from './sections/favorite/favorite';

export default function createMain(parent) {
  const main = document.createElement('main');
  main.classList.add('main');
  parent.append(main);

  createFavoriteSection(main);
}
