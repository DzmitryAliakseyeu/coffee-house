import { hideErrorText, showErrorText } from '../../error/error';
import { OrderToServerI, ProductInLSI } from '../../interfaces/interfaces';
import { hideLoader, showLoader } from '../../loader/loader';
import confirmOrderRequest from '../../requests/confirmOrder';

import './cart-modal.css';

export default async function createModalCart() {
  const modal = document.createElement('div');
  modal.classList.add('modal-cart');
  document.body.append(modal);

  document.body.classList.add('no-scroll');

  hideErrorText('.modal-cart');

  showLoader('.modal-cart');

  modal.addEventListener('click', (e) => {
    const overlay = modal.querySelector('.overlay') as HTMLElement;
    const target = e.target as HTMLElement;

    if (!overlay.contains(target)) {
      document.body.classList.remove('no-scroll');
      modal.remove();
    }
  });

  try {
    let ordersInLS: ProductInLSI[];
    let order: OrderToServerI;
    ordersInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');

    order = {
      items: ordersInLS.map((item) => ({
        productId: +item.id,
        size: item.size,
        additives: item.extras || [],
        quantity: 1,
      })),
      totalPrice: ordersInLS.reduce((sum, item) => sum + +item.totlatPrice, 0),
    };

    let response = await confirmOrderRequest(order);

    if (response) {
      modal.remove();
      let productContainer = document.querySelector(
        '.products-cart-container',
      ) as HTMLElement;
      productContainer.innerHTML = '';
      const succesfullMessage = document.createElement('h3');
      succesfullMessage.classList.add('heading-3');
      succesfullMessage.classList.add('text-dark');
      succesfullMessage.classList.add('succesfull-message');
      productContainer.append(succesfullMessage);
      succesfullMessage.textContent =
        'Thank you for your order! Our manager will contact you shortly.';

      const totalCartPrice = document.querySelector(
        '.order-total-info-text',
      ) as HTMLElement;
      let totalPrice = 0;
      totalCartPrice.textContent = `$${totalPrice.toFixed(2)}`;

      localStorage.removeItem('orders');
      const cartQuantity = document.querySelector('.cart-quantity') as HTMLElement;
      cartQuantity.textContent = '0';
      const buttonConfirm = document.querySelector('.button-confirm');
      buttonConfirm?.remove()
    }

    modal.addEventListener('click', (e) => {
      const modalCard = modal.querySelector('.modal-card') as HTMLElement;
      const target = e.target as HTMLElement;

      if (!modalCard.contains(target)) {
        modal.remove();
      }
    });
  } catch {
    hideLoader('.modal-cart');
    showErrorText('.modal-cart');
  }
}
