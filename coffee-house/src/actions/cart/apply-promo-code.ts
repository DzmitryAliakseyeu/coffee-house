import { UnionOrderI } from '../../interfaces/interfaces';

export default function applyPromoCode(parent: HTMLElement) {
  const button = parent.querySelector(
    '.button-apply-promo-code',
  ) as HTMLButtonElement;
  button.setAttribute('disabled', '');
  let unionOrders = JSON.parse(localStorage.getItem('unionOrders') || '[]');

  let orderIndexHasPromoCode = unionOrders.find(
    (order: UnionOrderI) => !order.hasPromoCode,
  );

  if (orderIndexHasPromoCode !== -1) {
    const updatedUnionOrders = unionOrders.map((order: UnionOrderI) => {
      order.hasPromoCode = true;
      order.totlatPriceWithPromoCode = order.totlatPrice * 0.8;
      order.totalDiscountSumWithPromoCode = order.totalDiscountSum * 0.8;
      return order;
    });

    localStorage.setItem('unionOrders', JSON.stringify(updatedUnionOrders));

    let unionOrdersUp = JSON.parse(localStorage.getItem('unionOrders') || '[]');

    unionOrdersUp.forEach((order: UnionOrderI) => {
      const productsBlock =
        document.querySelectorAll<HTMLDivElement>('.product-block');
      productsBlock.forEach((el) => {
        const productName = el.querySelector('.product-title') as HTMLElement;

        const productExtras = el.querySelector(
          '.product-extras',
        ) as HTMLElement;
        const productExtrasArray = productExtras.textContent.split(',');
        const productSelectSize = productExtrasArray[0];
        const productAddivities = productExtrasArray.splice(1);

        if (
          order.name === productName.textContent &&
          order.selectSize === productSelectSize &&
          order.extras.join(',').trim() === productAddivities.join(',').trim()
        ) {
          const productPriceBlock = el.querySelector(
            '.product-price-block',
          ) as HTMLElement;
          const productTotalPriceText = el.querySelector(
            '.product-price',
          ) as HTMLElement;
          const productTotalDiscountPriceText = el.querySelector(
            '.cart-card-price',
          ) as HTMLElement;

          if (productTotalDiscountPriceText) {
            productTotalDiscountPriceText.textContent = `$${String(order.totalDiscountSumWithPromoCode.toFixed(2))}`;
          } else {
            if (order.totlatPriceWithPromoCode > 0) {
              productTotalPriceText.classList.add('unavaliable-price');
              const discountPriceProduct = document.createElement('h3');
              discountPriceProduct.classList.add('heading-3');
              discountPriceProduct.classList.add('text-dark');
              discountPriceProduct.classList.add('cart-card-price');
              productPriceBlock.append(discountPriceProduct);
              discountPriceProduct.textContent = `$${order.totlatPriceWithPromoCode.toFixed(2)}`;
            } else {
              productTotalPriceText.classList.remove('unavaliable-price');
            }
          }
        }
      });
    });

    let productsTotalPriceSum = unionOrdersUp.reduce(
      (acc: number, item: UnionOrderI) => acc + item.totlatPrice,
      0,
    );

    let productsWithoutDiscountWithPromo: UnionOrderI[] = unionOrdersUp.filter(
      (item: UnionOrderI) => item.totalDiscountSumWithPromoCode === 0,
    );

    let productsWithDiscountWithPromo = unionOrdersUp.filter(
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

    const totalCardPriceWithPromoText = document.querySelector(
      '.order-total-info-text',
    ) as HTMLElement;
    const totalPriceBlock = document.querySelector(
      '.totla-price-block-cart',
    ) as HTMLElement;
    totalCardPriceWithPromoText.textContent = `$${productsTotalPriceSum.toFixed(2)}`;
    if (
      allCartDiscountWithPromo > 0 &&
      !document.querySelector('.total-discount-price')
    ) {
      totalCardPriceWithPromoText.classList.add('unavaliable-price');
      const discountPriceProduct = document.createElement('h3');
      discountPriceProduct.classList.add('heading-3');
      discountPriceProduct.classList.add('text-dark');
      discountPriceProduct.classList.add('cart-card-price');
      discountPriceProduct.classList.add('total-discount-price');
      totalPriceBlock.append(discountPriceProduct);
      discountPriceProduct.textContent = `$${allCartDiscountWithPromo.toFixed(2)}`;
      return;
    } else if (
      allCartDiscountWithPromo > 0 &&
      document.querySelector('.total-discount-price')
    ) {
      (
        document.querySelector('.total-discount-price') as HTMLElement
      ).textContent = `$${allCartDiscountWithPromo.toFixed(2)}`;
    }
  }
}
