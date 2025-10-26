import { OrderI } from "../../interfaces/interfaces";

export default function removeProductFromCart(id: string){
    const productBlocks = document.querySelectorAll<HTMLDivElement>('.product-block');
    let productInLs = JSON.parse(localStorage.getItem('orders') ?? '[]');

     const indexToRemove = productInLs.findLastIndex((product: OrderI) => String(product.id) === id);
      if (indexToRemove !== -1) {
    productInLs.splice(indexToRemove, 1);

  

    localStorage.setItem('orders', JSON.stringify(productInLs));
    console.log(productInLs)
    const productBlock = Array.from(productBlocks).reverse().find((product) => product.id === id);
    if (productBlock) productBlock.remove();

    //   let totalPriceSum;
    //   if(productInLs.length > 0){
    //     totalPriceSum = productInLs.reduce((acc: number, el: OrderI) => acc + el.totlatPrice, 0);
    //   } else {
    //     totalPriceSum = 0;
    //   }

      (function updateData(){
          let productInLs = JSON.parse(localStorage.getItem('orders') ?? '[]');
        const totalPrice = document.querySelector('.order-total-info-text') as HTMLElement | null;
        const cartQuantity = document.querySelector('.cart-quantity') as HTMLElement | null;

  // пересчитываем сумму
        const totalPriceSum = productInLs.reduce((acc: number, el: OrderI) => acc + el.totlatPrice, 0);

        if (totalPrice) {
        totalPrice.textContent = `$${totalPriceSum.toFixed(2)}`;
        }

        if (cartQuantity) {
            cartQuantity.textContent = productInLs.length.toString();
        }
    })()
}
    
  
}