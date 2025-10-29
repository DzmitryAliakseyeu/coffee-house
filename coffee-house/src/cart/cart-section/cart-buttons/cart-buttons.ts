import createButton from '../../../button/button';
import createModalCart from '../../cart-modal/cart-modal';
import './cart-buttons.css';

export default function createCartButtonsBlock(parent: HTMLElement) {
  const cartButtonsBlock = document.createElement('div');
  cartButtonsBlock.classList.add('cart-buttons-block');
  parent.append(cartButtonsBlock);

  // let userSignIn = JSON.parse(
  //   JSON.stringify(localStorage.getItem('signInUser')),
  // );

  let token = localStorage.getItem('token');
  let order = JSON.parse(localStorage.getItem('orders') ?? '[]')

  if (token && (order && order.length > 0)) {
    createButton({
      parent: cartButtonsBlock,
      className: 'confirm',
      action: async () => {
        createModalCart();
      },
      text: 'Confirm',
      hasIcon: false,
      isHtml: false,
    });
  } 
  
  if(!token){
    createButton({
      parent: cartButtonsBlock,
      className: 'sign-in',
      action: () => {
        window.open('/coffee-house/pages/sign-in.html', '_self');
      },
      text: 'Sign In',
      hasIcon: false,
      isHtml: false,
    });

    createButton({
      parent: cartButtonsBlock,
      className: 'registration',
      action: () => {
        window.open('/coffee-house/pages/registration.html', '_self');
      },
      text: 'Registration',
      hasIcon: false,
      isHtml: false,
    });
  }
}
