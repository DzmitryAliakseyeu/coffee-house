import { OrderI, UnionOrderI } from '../../interfaces/interfaces';

export default function removeProductFromCart(parent: HTMLElement) {
  const productName = parent.querySelector('.product-title') as HTMLElement;
  const productExtras = parent.querySelector('.product-extras') as HTMLElement;
  const productExtrasArray = productExtras.textContent.split(',');
  const productSelectSize = productExtrasArray[0];
  const productAddivities = productExtrasArray.splice(1);
  const productQuantityInCartText = document.querySelector(
    '.cart-quantity',
  ) as HTMLElement;

  const totalCartPrice = document.querySelector(
    '.order-total-info-text',
  ) as HTMLElement;
  const totalCartDiscountPrice = document.querySelector(
    '.total-discount-price',
  ) as HTMLElement;

  const unionOrders: UnionOrderI[] = JSON.parse(
    localStorage.getItem('unionOrders') || '[]',
  );
  const ordersInLS: OrderI[] = JSON.parse(
    localStorage.getItem('orders') || '[]',
  );

  let updatedUnionOrders = unionOrders.filter((order: UnionOrderI) => {
    return !(
      order.name === productName.textContent &&
      order.selectSize === productSelectSize &&
      order.extras.join(',').trim() === productAddivities.join(',').trim()
    );
  });

  localStorage.setItem('unionOrders', JSON.stringify(updatedUnionOrders));
  let productsInCartQuantity = updatedUnionOrders.reduce(
    (sum: number, item: UnionOrderI) => sum + item.quantity,
    0,
  );
  productQuantityInCartText.textContent = String(productsInCartQuantity);

  let updatedOrders = ordersInLS.filter((order: OrderI) => {
    return !(
      order.name === productName.textContent &&
      order.selectSize === productSelectSize &&
      order.extras.join(',').trim() === productAddivities.join(',').trim()
    );
  });

  let totalCartPriceSum = updatedUnionOrders.reduce(
    (sum: number, item: UnionOrderI) => sum + item.totlatPrice,
    0,
  );

  let allDiscountSum = updatedUnionOrders
    .filter((order: UnionOrderI) => order.totalDiscountSum > 0)
    .reduce((sum: number, item: UnionOrderI) => sum + item.totalDiscountSum, 0);
  let allWithoutTotalDiscountSum = updatedUnionOrders
    .filter((order: UnionOrderI) => order.totalDiscountSum === 0)
    .reduce((sum: number, item: UnionOrderI) => sum + item.totlatPrice, 0);
  let totalCartAllPriceSum = allDiscountSum + allWithoutTotalDiscountSum;

  totalCartPrice.textContent = `$${String(totalCartPriceSum.toFixed(2))}`;

  if (totalCartDiscountPrice) {
    totalCartDiscountPrice.textContent = `$${String(totalCartAllPriceSum.toFixed(2))}`;
  }

  localStorage.setItem('orders', JSON.stringify(updatedOrders));

  parent.remove();
}
