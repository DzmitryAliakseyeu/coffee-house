import { UnionOrderI } from '../../../../../interfaces/interfaces';
import './product-image-block.css';

export default function createProductImageBlock(
  parent: HTMLElement,
  product: UnionOrderI,
) {
  const productImageBox = document.createElement('div');
  productImageBox.classList.add('product-image-box');
  parent.append(productImageBox);

  const productImage = document.createElement('img');
  productImage.classList.add('product-image');
  productImageBox.append(productImage);
  productImage.src = `../products/${product.name}.png`;
}
