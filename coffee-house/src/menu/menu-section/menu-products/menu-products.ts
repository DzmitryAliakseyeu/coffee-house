import showErrorText from '../../../error/error';
import { ProductsDataI } from '../../../interfaces/interfaces';
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

   try {
      let response = await getProducts();

      products = response.data;

      filteredProducts = filterProducts(tabActive.id, products);

          filteredProducts.forEach((product) => {
    createPreviewCard({
      parent: menuProductsGrid,
      id: product.id,
      srcImg: `../../../../public/products/${product.name}.png`,
      title: product.name,
      description: product.description,
      price: `$${product.price}`,
       ...(product.discountPrice ? {discountPrice: `$${product.discountPrice}`} : {})
    }
    );
  })
      
    } catch {
      console.log('error')
      // showErrorText()
    }

   

  // filteredProducts = filterProducts(tabActive.id);

 

  // filteredProducts.forEach((product) => {
  //   createPreviewCard({
  //     parent: menuProductsGrid,
  //     srcImg: `../../../../public/products/${product.name}.png`,
  //     title: product.name,
  //     description: product.description,
  //     price: `$${product.price}`,
  //   }
  //   );
  // });
}

