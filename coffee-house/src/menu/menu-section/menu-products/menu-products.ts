import { ProductsDataI } from '../../../interfaces/interfaces';
import filterProducts from './filter-products/filter-products';
import './menu-products.css';
import createPreviewCard from './preview-card/preview-card';

export let filteredProducts: ProductsDataI[];

export default function createMenuProductsGrid(parent: HTMLElement) {
  const menuProductsGrid = document.createElement('ul');
  menuProductsGrid.classList.add('menu-products-grid');
  parent.append(menuProductsGrid);

  const tabActive = document.querySelector('.tab-active') as HTMLElement;

  filteredProducts = filterProducts(tabActive.id);

  filteredProducts.forEach((product) => {
    createPreviewCard({
      parent: menuProductsGrid,
      srcImg: `../../../../public/products/${product.name}.png`,
      title: product.name,
      description: product.description,
      price: `$${product.price}`,
    }
    );
  });
}

