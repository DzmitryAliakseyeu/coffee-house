import createButton from '../../../button/button';
import createModalCart from '../../cart-modal/cart-modal';
import './cart-buttons.css';

export default function createCartButtonsBlock(parent: HTMLElement) {
  const cartButtonsBlock = document.createElement('div');
  cartButtonsBlock.classList.add('cart-buttons-block');
  parent.append(cartButtonsBlock);

  let userSignIn = JSON.parse(
    JSON.stringify(localStorage.getItem('signInUser')),
  );

  if (userSignIn) {
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
  } else {
    createButton({
      parent: cartButtonsBlock,
      className: 'sign-in',
      action: () => {
        window.open('/pages/sign-in.html', '_self');
      },
      text: 'Sign In',
      hasIcon: false,
      isHtml: false,
    });

    createButton({
      parent: cartButtonsBlock,
      className: 'registration',
      action: () => {
        window.open('/pages/registration.html', '_self');
      },
      text: 'Registration',
      hasIcon: false,
      isHtml: false,
    });
  }
}
