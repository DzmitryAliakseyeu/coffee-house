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
        if (!order.hasPromoCode) {
          productDiscountPrice.textContent = `$${String(order.totalDiscountSum.toFixed(2))}`;
        }

        if (order.hasPromoCode) {
          if (order.totalDiscountSumWithPromoCode > 0) {
            productDiscountPrice.textContent = `$${String(order.totalDiscountSumWithPromoCode.toFixed(2))}`;
          } else {
            productDiscountPrice.textContent = `$${String(order.totlatPriceWithPromoCode.toFixed(2))}`;
          }
        }
      }
    }
  });

  const indexOrderWithPromoCode = unionOrders.findIndex(
    (order: UnionOrderI) => order.hasPromoCode === false,
  );

  if (indexOrderWithPromoCode === -1) {
    console.log('all true');
    let productsWithoutDiscountWithPromo: UnionOrderI[] = unionOrders.filter(
      (item: UnionOrderI) => item.totalDiscountSumWithPromoCode === 0,
    );

    let productsWithDiscountWithPromo = unionOrders.filter(
      (item: UnionOrderI) => item.totalDiscountSumWithPromoCode > 0,
    );

    let poductsWithoutDiscountSumWithPromo =
      productsWithoutDiscountWithPromo.reduce(
        (acc: number, item: UnionOrderI) => acc + item.totlatPriceWithPromoCode,
        0,
      );
    let poductsWithWithDiscountSumWithPromo =
      productsWithDiscountWithPromo.reduce(
        (acc: number, item: UnionOrderI) =>
          acc + item.totalDiscountSumWithPromoCode,
        0,
      );

    let allCartDiscountWithPromo =
      poductsWithoutDiscountSumWithPromo + poductsWithWithDiscountSumWithPromo;

    totalCartDiscountPrice.textContent = `$${allCartDiscountWithPromo.toFixed(2)}`;

    const productsQuantityInCart = unionOrders.reduce(
      (sum: number, item: UnionOrderI) => sum + item.quantity,
      0,
    );

    cartHeaderQuantity.textContent = String(productsQuantityInCart);
  } else {
    let totalCartPriceSum = unionOrders.reduce(
      (sum: number, item: UnionOrderI) => sum + item.totlatPrice,
      0,
    );

    let allDiscountSum = unionOrders
      .filter((order: UnionOrderI) => order.totalDiscountSum > 0)
      .reduce(
        (sum: number, item: UnionOrderI) => sum + item.totalDiscountSum,
        0,
      );
    let allWithoutTotalDiscountSum = unionOrders
      .filter((order: UnionOrderI) => order.totalDiscountSum === 0)
      .reduce((sum: number, item: UnionOrderI) => sum + item.totlatPrice, 0);
    let totalCartAllPriceSum = allDiscountSum + allWithoutTotalDiscountSum;
    totalCartPrice.textContent = `$${String(totalCartPriceSum.toFixed(2))}`;

    if (totalCartDiscountPrice) {
      totalCartDiscountPrice.textContent = `$${String(totalCartAllPriceSum.toFixed(2))}`;
    }

    const productsQuantityInCart = unionOrders.reduce(
      (sum: number, item: UnionOrderI) => sum + item.quantity,
      0,
    );

    cartHeaderQuantity.textContent = String(productsQuantityInCart);
    console.log('continue');
  }
}
