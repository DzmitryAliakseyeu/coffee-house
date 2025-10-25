import { OrderI } from "../../interfaces/interfaces";

export default function removeProductFromCart(id: string){
    const productBlocks = document.querySelectorAll<HTMLDivElement>('.product-block');
    const productInLs = JSON.parse(localStorage.getItem('orders') ?? '[]');

     const indexToRemove = productInLs.findLastIndex((product: OrderI) => String(product.id) === id);
      if (indexToRemove !== -1) {
    productInLs.splice(indexToRemove, 1);

    localStorage.setItem('orders', JSON.stringify(productInLs));
    const productBlock = Array.from(productBlocks).reverse().find((product) => product.id === id);
    if (productBlock) productBlock.remove();

      const totalPriceSum = productInLs.reduce((acc: number, el: OrderI) => acc + el.totlatPrice, 0);
      const totalPrice = document.querySelector('.total-price') as HTMLElement;
      totalPrice.textContent = `$${totalPriceSum}`;

      const cartQuantity = document.querySelector('.cart-quantity') as HTMLElement;
      cartQuantity.textContent = productInLs.length.toString();
    }
}