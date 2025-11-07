import { UnionOrderI } from '../../interfaces/interfaces';

export default function updateDataPage(parent: HTMLElement) {
  const productName = parent.querySelector('.product-title') as HTMLElement;
  const productExtras = parent.querySelector('.product-extras') as HTMLElement;
  const productExtrasArray = productExtras.textContent.split(',');
  const productSelectSize = productExtrasArray[0];
  const productAddivities = productExtrasArray.splice(1);
  const productPrice = parent.querySelector('.product-price') as HTMLElement;
  const productDiscountPrice = parent.querySelector(
    '.cart-card-price',
  ) as HTMLElement;
  const cartHeaderQuantity = document.querySelector(
    '.cart-quantity',
  ) as HTMLElement;

  const totalCartPrice = document.querySelector(
    '.order-total-info-text',
  ) as HTMLElement;
  const totalCartDiscountPrice = document.querySelector(
    '.total-discount-price',
  ) as HTMLElement;

  const unionOrders = JSON.parse(localStorage.getItem('unionOrders') || '[]');

  unionOrders.forEach((order: UnionOrderI) => {
    if (
      order.name === productName.textContent &&
      order.selectSize === productSelectSize &&
      order.extras.join(',').trim() === productAddivities.join(',').trim()
    ) {
      productPrice.textContent = `$${String(order.totlatPrice.toFixed(2))}`;

      if (productDiscountPrice) {
        productDiscountPrice.textContent = `$${String(order.totalDiscountSum.toFixed(2))}`;
      }
    }
  });

  let totalCartPriceSum = unionOrders.reduce(
    (sum: number, item: UnionOrderI) => sum + item.totlatPrice,
    0,
  );

  // let totalCartPriceSum = unionOrders.reduce((sum: number, item: UnionOrderI)=> console.log(item))
  let allDiscountSum = unionOrders
    .filter((order: UnionOrderI) => order.totalDiscountSum > 0)
    .reduce((sum: number, item: UnionOrderI) => sum + item.totalDiscountSum, 0);
  let allWithoutTotalDiscountSum = unionOrders
    .filter((order: UnionOrderI) => order.totalDiscountSum === 0)
    .reduce((sum: number, item: UnionOrderI) => sum + item.totlatPrice, 0);
  let totalCartAllPriceSum = allDiscountSum + allWithoutTotalDiscountSum;

  console.log(totalCartAllPriceSum);
  console.log(totalCartPriceSum);
  totalCartPrice.textContent = `$${String(totalCartPriceSum.toFixed(2))}`;

  if (totalCartDiscountPrice) {
    totalCartDiscountPrice.textContent = `$${String(totalCartAllPriceSum.toFixed(2))}`;
  }

  const productsQuantityInCart = unionOrders.reduce(
    (sum: number, item: UnionOrderI) => sum + item.quantity,
    0,
  );

  cartHeaderQuantity.textContent = String(productsQuantityInCart);
}
