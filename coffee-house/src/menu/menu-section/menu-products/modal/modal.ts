import getProductById from '../../../../requests/getProductById';
import filterProducts from '../filter-products/filter-products';
import { products } from '../menu-products';
import createModalCard from './card-modal/card-modal';


import './modal.css';

export default async function createModal(title: string, id:string) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.append(modal);

  document.body.classList.add('no-scroll');

  const activeTab = document.querySelector('.tab-active') as HTMLElement;

  // let newFilteredProducts = filterProducts(activeTab.id, products);

  // let product = newFilteredProducts.filter((card) => card.name === title);

  try {
    let response = await getProductById(id);

    let product = response.data;
    await createModalCard(modal, product);
      modal.addEventListener('click', (e) => {
    const modalCard = modal.querySelector('.modal-card') as HTMLElement;
    const target = e.target as HTMLElement;

    if (!modalCard.contains(target)) {
      modal.remove();
    }
    });
  } catch {
    console.log('error')
  }




}
