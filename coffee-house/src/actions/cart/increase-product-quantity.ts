import updateDataPage from './update-data-page';
import updateLocalStorageData from './update-ls-data';

export default function increaseProductQuantity(parent: HTMLElement) {
  const productBlock = parent.closest('.product-block') as HTMLElement;
  const productQuantityText = productBlock.querySelector(
    '.product-quantity-text',
  ) as HTMLElement;

  const quantity = productQuantityText.textContent;

  productQuantityText.textContent = String(+quantity + 1);

  updateLocalStorageData(productBlock);
  updateDataPage(productBlock);
}
