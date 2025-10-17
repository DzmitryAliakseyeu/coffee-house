
import { productsData } from '../../../../data/products-data';
import { ProductsDataI } from '../../../../interfaces/interfaces';

export default function filterProducts(category: string) {
  let filteredProducts = productsData.filter(
    (product: ProductsDataI) => product.category === category,
  );

  return filteredProducts;
}
