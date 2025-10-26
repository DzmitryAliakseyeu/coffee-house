import { OrderI } from '../../../interfaces/interfaces';
import createProductBlock from './product/product';
import './products-in-cart.css';

export default function createProductsCartContainer(parent: HTMLElement) {
  const productsCartContainer = document.createElement('div');
  productsCartContainer.classList.add('products-cart-container');
  parent.append(productsCartContainer);

  let productsInLS = JSON.parse(localStorage.getItem('orders') || '[]');

  productsInLS.forEach((product: OrderI) => {
    createProductBlock(productsCartContainer, product);
  });
}
