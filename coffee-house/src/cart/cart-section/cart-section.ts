import createProductsCartContainer from './products-in-cart/products-in-cart';
import './cart-section.css';
import createCartButtonsBlock from './cart-buttons/cart-buttons';
import createOrderInfo from './order-info/order-info';
import createPromoCodeBlock from './promo-code/promo-code';
import createCardInfo from './card-info/card-info';
import getProfile from '../../requests/getProfile';

export default async function createCartSection(parent: HTMLElement) {
  const sectionCart = document.createElement('section');
  sectionCart.classList.add('cart');
  parent.append(sectionCart);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionCart.append(containerSection);

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('cart-title');
  sectionTitle.classList.add('heading-2');
  sectionTitle.classList.add('text-dark');
  sectionTitle.textContent = 'Cart';
  containerSection.append(sectionTitle);

  createProductsCartContainer(containerSection);
  let token = localStorage.getItem('token');
  if (token) {
    try {
      let response = await getProfile(token);
      if (response.data.paymentMethod === 'card') {
        createPromoCodeBlock(containerSection);
        createOrderInfo(containerSection);
        createCardInfo(containerSection);
        createCartButtonsBlock(containerSection);
        const buttonConfirm = document.querySelector(
          '.button-confirm',
        ) as HTMLButtonElement;
        if (buttonConfirm) {
          buttonConfirm.setAttribute('disabled', '');
        }
      } else {
        createPromoCodeBlock(containerSection);
        createOrderInfo(containerSection);
        createCartButtonsBlock(containerSection);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    createOrderInfo(containerSection);
    createCartButtonsBlock(containerSection);
  }
}
