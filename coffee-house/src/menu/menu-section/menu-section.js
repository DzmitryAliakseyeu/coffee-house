import createMenuOfferContainer from './menu-container/menu-container';
import createMenuProductsGrid from './menu-products/menu-products';

export default function createMenuSection(parent) {
  const sectionMenu = document.createElement('section');
  sectionMenu.classList.add('menu');
  parent.append(sectionMenu);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionMenu.append(containerSection);

  createMenuOfferContainer(containerSection);

  createMenuProductsGrid(containerSection);
}
