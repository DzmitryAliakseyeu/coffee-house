import { UnionOrderI } from '../../../../../interfaces/interfaces';
import './product-description-block.css';

export default function createProductDescriptionBlock(
  parent: HTMLElement,
  product: UnionOrderI,
) {
  const productDescription = document.createElement('div');
  productDescription.classList.add('product-description');
  parent.append(productDescription);

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
}
