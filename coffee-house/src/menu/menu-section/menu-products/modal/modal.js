
import filterProducts from '../filter-products/filter-products';

import createModalCard from './card-modal/card-modal';
import './modal.css';

export default function createModal(title) {
   

  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.append(modal);

  document.body.classList.add('no-scroll');

  const activeTab = document.querySelector('.tab-active')

   let  newFilteredProducts = filterProducts(activeTab.id)

  let product = newFilteredProducts.filter((card) => card.name === title);

  createModalCard(modal, product);

  modal.addEventListener('click', (e)=> {
   const modalCard = modal.querySelector('.modal-card');

  if (!modalCard.contains(e.target)) {
    modal.remove();
  }
  })
}
