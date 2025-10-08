import filterProducts from './filter-products/filter-products';
import './menu-products.css';
import createPreviewCard from './preview-card/preview-card';

export default function createMenuProductsGrid(parent) {
  const menuProductsGrid = document.createElement('ul');
  menuProductsGrid.classList.add('menu-products-grid');
  parent.append(menuProductsGrid);

  const tabActive = document.querySelector('.tab-active');

  const filteredProducts = filterProducts(tabActive.id);

  filteredProducts.forEach((product) => {
    createPreviewCard(
      menuProductsGrid,
      `../../../../public/products/${product.name}.png`,
      product.name,
      product.description,
      `$${product.price}`,
    );
  });
}
