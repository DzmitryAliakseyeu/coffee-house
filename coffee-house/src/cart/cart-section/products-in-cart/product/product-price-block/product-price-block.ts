import { UnionOrderI } from '../../../../../interfaces/interfaces';
import './product-price-block.css';

export default function createProductPriceBlock(
  parent: HTMLElement,
  product: UnionOrderI,
) {
  const productPriceBlock = document.createElement('div');
  productPriceBlock.classList.add('product-price-block');
  parent.append(productPriceBlock);

  const productPrice = document.createElement('h3');
  productPrice.classList.add('product-price');
  productPrice.classList.add('heading-3');
  productPrice.classList.add('text-dark');
  productPriceBlock.append(productPrice);
  productPrice.textContent = `$${(product.totlatPrice * product.quantity).toFixed(2)}`;

  let token = localStorage.getItem('token');

  if (product.totalDiscountSum > 0 && token) {
    productPrice.classList.add('unavaliable-price');
    const discountPriceProduct = document.createElement('h3');
    discountPriceProduct.classList.add('heading-3');
    discountPriceProduct.classList.add('text-dark');
    discountPriceProduct.classList.add('cart-card-price');
    productPriceBlock.append(discountPriceProduct);
    discountPriceProduct.textContent = `$${(product.totalDiscountSum * product.quantity).toFixed(2)}`;
  } else {
    productPrice.classList.remove('unavaliable-price');
  }
}
