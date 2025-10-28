import {
  ProductsDataI,
  UserSignInI,
} from '../../../../../../interfaces/interfaces';

export default function toggleDiscountCardPrice(
  product: ProductsDataI,
  userSignIn: UserSignInI,
  discount: number,
) {
  const totalPrice = document.querySelector('.total-price') as HTMLElement;
  const totalPriceBlock = document.querySelector(
    '.total-price-block',
  ) as HTMLElement;

  let isSignIn = Boolean(userSignIn);
  if (isSignIn && discount > 0) {
    if (document.querySelector('.discount-card-price-modal') as HTMLElement) {
      (
        document.querySelector('.discount-card-price-modal') as HTMLElement
      ).textContent = `$${discount}`;
      return;
    } else {
      totalPrice.classList.add('unavaliable-price');
      const discountPriceCard = document.createElement('h3');
      discountPriceCard.classList.add('heading-3');
      discountPriceCard.classList.add('text-dark');
      discountPriceCard.classList.add('preview-card-price');
      discountPriceCard.classList.add('discount-card-price-modal');
      totalPriceBlock.append(discountPriceCard);
      discountPriceCard.textContent = `$${discount}!!!!`;
      return;
    }

    // order.price.discount = +product.discountPrice;
    // order.totlatPrice = +product.discountPrice;
    // return order
  } else {
    totalPrice.classList.remove('unavaliable-price');
    if (document.querySelector('.discount-card-price-modal') as HTMLElement) {
      (
        document.querySelector('.discount-card-price-modal') as HTMLElement
      ).remove();
    }

    // return order
  }
}
