import createButton from '../../../../../button/button';
import './product-quantity-block.css';

export default function createProductQuantityBlock(
  parent: HTMLElement,
  quantity: number,
) {
  const productQuantityBlock = document.createElement('div');
  productQuantityBlock.classList.add('product-quantity-block');
  parent.append(productQuantityBlock);

  createButton({
    parent: productQuantityBlock,
    className: 'decrease-product',
    action: () => console.log('decrease'),
    text: '-',
    hasIcon: false,
    isHtml: false,
  });
  const productQuantityText = document.createElement('p');
  productQuantityText.classList.add('product-quntity-text');
  productQuantityText.textContent = String(quantity);
  productQuantityBlock.append(productQuantityText);
  createButton({
    parent: productQuantityBlock,
    className: 'increase-product',
    action: () => console.log('increase'),
    text: '+',
    hasIcon: false,
    isHtml: false,
  });
}
