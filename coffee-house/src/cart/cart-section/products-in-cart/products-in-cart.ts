import deepCompareOrders from '../../../actions/cart/compareOrders';
import { OrderI, UnionOrderI } from '../../../interfaces/interfaces';
import createProductBlock from './product/product';
import './products-in-cart.css';

export default function createProductsCartContainer(parent: HTMLElement) {
  const productsCartContainer = document.createElement('div');
  productsCartContainer.classList.add('products-cart-container');
  parent.append(productsCartContainer);

  let productsInLS = JSON.parse(localStorage.getItem('orders') || '[]');

  let unionOrders: UnionOrderI[] = deepCompareOrders();
  console.log(unionOrders);
  localStorage.setItem('unionOrders', JSON.stringify(unionOrders));

  // productsInLS.forEach((product: OrderI) => {
  //   createProductBlock(productsCartContainer, product);
  // });

  unionOrders.forEach((product: UnionOrderI) => {
    createProductBlock(productsCartContainer, product);
  });
}
