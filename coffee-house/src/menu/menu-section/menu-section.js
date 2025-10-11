import createButton from '../../button/button';
import createMenuOfferContainer from './menu-container/menu-container';
import loadProducts from './menu-products/load-products/load-products';
import createMenuProductsGrid, { filteredProducts } from './menu-products/menu-products';

export default function createMenuSection(parent) {
  const sectionMenu = document.createElement('section');
  sectionMenu.classList.add('menu');
  parent.append(sectionMenu);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionMenu.append(containerSection);

  createMenuOfferContainer(containerSection);

  createMenuProductsGrid(containerSection);


        createButton(containerSection, 'load', ()=> {loadProducts(filteredProducts)}, '', true)
    

 
}
