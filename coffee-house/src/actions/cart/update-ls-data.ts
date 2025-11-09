import { OrderI, UnionOrderI } from '../../interfaces/interfaces';

export default function updateLocalStorageData(
  parent: HTMLElement,
  action: 'decrease' | 'increase',
) {
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
      if (order.hasPromoCode) {
        order.totlatPriceWithPromoCode =
          order.quantity * order.singleProductTotalSum * 0.8;
        order.totalDiscountSumWithPromoCode =
          order.quantity * order.singleProductDiscountSum * 0.8;
      }
      return order;
    }
    return order;
  });

  localStorage.setItem('unionOrders', JSON.stringify(updatedUnionOrders));

  const ordersInLS: OrderI[] = JSON.parse(
    localStorage.getItem('orders') || '[]',
  );
  if (action === 'increase') {
    const match = ordersInLS.find(
      (order) =>
        order.name === productName.textContent &&
        order.selectSize === productSelectSize &&
        order.extras.join(',').trim() === productAddivities.join(',').trim(),
    );

    if (match) {
      ordersInLS.push({ ...match });
    }
  }

  if (action === 'decrease') {
    const index = ordersInLS.findIndex(
      (order) =>
        order.name === productName.textContent &&
        order.selectSize === productSelectSize &&
        order.extras.join(',').trim() === productAddivities.join(',').trim(),
    );

    if (index !== -1) {
      ordersInLS.splice(index, 1);
    }
  }

  localStorage.setItem('orders', JSON.stringify(ordersInLS));
}
