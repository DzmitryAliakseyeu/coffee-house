import { hideErrorText, showErrorText } from '../../../../error/error';
import { hideLoader, showLoader } from '../../../../loader/loader';
import getProductById from '../../../../requests/getProductById';
import createModalCard from './card-modal/card-modal';

import './modal.css';

export default async function createModal(id: string) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.append(modal);

  document.body.classList.add('no-scroll');

  hideErrorText('.modal');

  showLoader('.modal');

  modal.addEventListener('click', (e) => {
    const overlay = modal.querySelector('.overlay') as HTMLElement;
    const target = e.target as HTMLElement;

    if (overlay) {
      if (!overlay.contains(target)) {
        document.body.classList.remove('no-scroll');
        modal.remove();
      }
    }
  });

  try {
    let response = await getProductById(id);

    let product = response.data;

    setTimeout(() => {
      hideLoader('.modal');
      createModalCard(modal, product);
    }, 1000);

    modal.addEventListener('click', (e) => {
      const modalCard = modal.querySelector('.modal-card') as HTMLElement;
      const target = e.target as HTMLElement;

      if (!modalCard.contains(target)) {
        modal.remove();
      }
    });
  } catch {
    hideLoader('.modal');
    showErrorText('.modal');
  }
}
