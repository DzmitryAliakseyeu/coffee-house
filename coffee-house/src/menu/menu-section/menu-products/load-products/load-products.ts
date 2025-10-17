import { ProductsDataI } from "../../../../interfaces/interfaces";

export default function loadProducts(products: ProductsDataI[]) {
  const previewCards = document.querySelectorAll<HTMLDivElement>('.preview-card');
  previewCards.forEach((card) => (card.style.display = 'flex'));

  if (previewCards.length === products.length) {
    const loadButton = document.querySelector('.button-load') as HTMLElement;
    loadButton.classList.add('hidden');
    return;
  }
}
