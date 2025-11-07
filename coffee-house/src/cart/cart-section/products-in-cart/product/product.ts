import removeProductFromCart from '../../../../actions/cart/removeProductFromCart';
import createButton from '../../../../button/button';
import { OrderI, UnionOrderI } from '../../../../interfaces/interfaces';
import createProductQuantityBlock from './product-quantity-block/product-quantity-block';
import './product.css';

export default function createProductBlock(
  parent: HTMLElement,
  product: UnionOrderI,
) {
  const productBlock = document.createElement('div');
  productBlock.classList.add('product-block');
  productBlock.id = product.id;
  parent.append(productBlock);

  createButton({
    parent: productBlock,
    className: 'remove-from-cart',
    action: () => {
      removeProductFromCart(productBlock.id);
    },
    text: '',
    hasIcon: true,
    isHtml: false,
  });

  const productImageBox = document.createElement('div');
  productImageBox.classList.add('product-image-box');
  productBlock.append(productImageBox);

  const productImage = document.createElement('img');
  productImage.classList.add('product-image');
  productImageBox.append(productImage);
  productImage.src = `../products/${product.name}.png`;

  const productDescription = document.createElement('div');
  productDescription.classList.add('product-description');
  productBlock.append(productDescription);

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product-title');
  productTitle.classList.add('heading-3');
  productTitle.classList.add('text-dark');
  productDescription.append(productTitle);
  productTitle.textContent = product.name;

  const productExtras = document.createElement('p');
  productExtras.classList.add('product-extras');
  productExtras.classList.add('text-dark');
  productExtras.classList.add('medium');
  productDescription.append(productExtras);
  productExtras.textContent = `${product.selectSize}, ${product.extras.join(',')}`;

  createProductQuantityBlock(productBlock, product.quantity);

  const productPriceBlock = document.createElement('div');
  productPriceBlock.classList.add('product-price-block');
  productBlock.append(productPriceBlock);

  const productPrice = document.createElement('h3');
  productPrice.classList.add('product-price');
  productPrice.classList.add('heading-3');
  productPrice.classList.add('text-dark');
  productPriceBlock.append(productPrice);
  let token = localStorage.getItem('token');

  productPrice.textContent = `$${(product.totlatPrice * product.quantity).toFixed(2)}`;

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
