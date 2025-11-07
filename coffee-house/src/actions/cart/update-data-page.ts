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
}
