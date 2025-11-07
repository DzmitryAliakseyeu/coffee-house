import { UnionOrderI } from '../../interfaces/interfaces';

export default function updateLocalStorageData(parent: HTMLElement) {
  const productName = parent.querySelector('.product-title') as HTMLElement;
  const productExtras = parent.querySelector('.product-extras') as HTMLElement;
  const productExtrasArray = productExtras.textContent.split(',');
  const productSelectSize = productExtrasArray[0];
  const productAddivities = productExtrasArray.splice(1);
  const productQuantityText = parent.querySelector(
    '.product-quantity-text',
  ) as HTMLElement;

  const unionOrders = JSON.parse(localStorage.getItem('unionOrders') || '[]');

  let updatedUnionOrders = unionOrders.map((order: UnionOrderI) => {
    if (
      order.name === productName.textContent &&
      order.selectSize === productSelectSize &&
      order.extras.join(',').trim() === productAddivities.join(',').trim()
    ) {
      order.quantity = +productQuantityText.textContent;
      order.totlatPrice = order.quantity * order.singleProductTotalSum;
      order.totalDiscountSum = order.quantity * order.singleProductDiscountSum;
    }
    return order;
  });

  localStorage.setItem('unionOrders', JSON.stringify(updatedUnionOrders));
}
