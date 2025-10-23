import { OrderI } from "../../interfaces/interfaces";

export default function removeProductFromCart(id: string){
    const productBlocks = document.querySelectorAll<HTMLDivElement>('.product-block');
    const productBlock = Array.from(productBlocks).find((product) => product.id === id);
    const productInLs = JSON.parse(localStorage.getItem('orders') ?? '[]');

    const updatedOrders = productInLs.filter((product: OrderI) => String(product.id) !== id);
    const totalPriceSum = updatedOrders.reduce((acc:number, el: OrderI) => acc + el.totlatPrice, 0);
    const totalPrice = document.querySelector('.total-price') as HTMLElement;
    totalPrice.textContent = `$${totalPriceSum}`;

     const cartQuantity = document.querySelector('.cart-quantity') as HTMLElement;
    
      cartQuantity.textContent = updatedOrders.length;

    if(productBlock){
        localStorage.setItem('orders', JSON.stringify(updatedOrders))
        productBlock.remove();
    }
}