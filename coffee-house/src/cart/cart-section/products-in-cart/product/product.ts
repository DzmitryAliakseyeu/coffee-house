import removeProductFromCart from '../../../../actions/cart/removeProductFromCart';
import createButton from '../../../../button/button';
import { OrderI, UnionOrderI } from '../../../../interfaces/interfaces';
import createProductDescriptionBlock from './product-description-block/product-description-block';
import createProductImageBlock from './product-image-block/product-image-block';
import createProductPriceBlock from './product-price-block/product-price-block';
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
      removeProductFromCart(productBlock);
    },
    text: '',
    hasIcon: true,
    isHtml: false,
  });

  createProductImageBlock(productBlock, product);

  createProductDescriptionBlock(productBlock, product);

  createProductQuantityBlock(productBlock, product.quantity);

  createProductPriceBlock(productBlock, product);
}
