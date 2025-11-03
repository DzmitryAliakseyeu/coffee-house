import { hideErrorText, showErrorText } from '../../../error/error';
import { ProductsDataI } from '../../../interfaces/interfaces';
import { hideLoader, showLoader } from '../../../loader/loader';
import getProducts from '../../../requests/getProducts';
import filterProducts from './filter-products/filter-products';
import './menu-products.css';
import createPreviewCard from './preview-card/preview-card';

export let filteredProducts: ProductsDataI[];

export let products: ProductsDataI[];

export default async function createMenuProductsGrid(parent: HTMLElement) {
  const menuProductsGrid = document.createElement('ul');
  menuProductsGrid.classList.add('menu-products-grid');
  parent.append(menuProductsGrid);

  const tabActive = document.querySelector('.tab-active') as HTMLElement;

  hideErrorText('.menu');
  showLoader('.menu');

  try {
    let response = await getProducts();

    products = response.data;

    setTimeout(() => hideLoader('.menu'), 1000);

    filteredProducts = filterProducts(tabActive.id, products);

    filteredProducts.forEach((product) => {
      createPreviewCard({
        parent: menuProductsGrid,
        id: product.id,
        srcImg: `../products/${product.name}.png`,
        title: product.name,
        description: product.description,
        price: `$${product.price}`,
        ...(product.discountPrice
          ? { discountPrice: `$${product.discountPrice}` }
          : {}),
      });
    });
  } catch {
    hideLoader('.menu');
    showErrorText('.menu');
  }
}
