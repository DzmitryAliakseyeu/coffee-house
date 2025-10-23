import createButton from "../../../button/button";
import './cart-buttons.css'

let isUserLogged = false;

export default function createCartButtonsBlock(parent: HTMLElement){
    const cartButtonsBlock = document.createElement('div');
    cartButtonsBlock.classList.add('cart-buttons-block');
    parent.append(cartButtonsBlock)

    if(isUserLogged){
         createButton({
            parent:  cartButtonsBlock,
            className: 'confirm',
            action: () => {
             console.log('confirm');
            },
            text: 'Confirm',
            hasIcon: false,
            isHtml: false,
          });
    } else {
         createButton({
            parent:  cartButtonsBlock,
            className: 'sign-in',
            action: () => {
              window.open('/pages/sign-in.html', '_self');
            },
            text: 'Sign In',
            hasIcon: false,
            isHtml: false,
          });

           createButton({
            parent:  cartButtonsBlock,
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