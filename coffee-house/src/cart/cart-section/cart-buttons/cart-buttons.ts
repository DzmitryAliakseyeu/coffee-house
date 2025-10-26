import createButton from "../../../button/button";
import { OrderToServerI, ProductInLSI } from "../../../interfaces/interfaces";
import confirmOrderRequest from "../../../requests/confirmOrder";
import './cart-buttons.css'

let isUserLogged = false;

export default function createCartButtonsBlock(parent: HTMLElement){
    const cartButtonsBlock = document.createElement('div');
    cartButtonsBlock.classList.add('cart-buttons-block');
    parent.append(cartButtonsBlock);

     let userSignIn = JSON.parse(JSON.stringify(localStorage.getItem('signInUser')))

    if(userSignIn){
        let  ordersInLS: ProductInLSI[];
        let order: OrderToServerI
         createButton({
            parent:  cartButtonsBlock,
            className: 'confirm',
            action: () => {
                ordersInLS =  JSON.parse(localStorage.getItem('orders') ?? '[]');
                console.log(ordersInLS);

               order = {
                items: ordersInLS.map(item => ({
                productId: +item.id,
                size: item.size,
                additives: item.extras || [],
                quantity: 1 
            })),
          totalPrice: ordersInLS.reduce((sum, item) => sum + +item.totlatPrice, 0)
        };

        console.log(ordersInLS)
         
           console.log(order)

           confirmOrderRequest(order)
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