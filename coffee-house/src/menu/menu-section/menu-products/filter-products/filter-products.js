import { productsData } from '../../../../data/products-data';

export default function filterProducts(category) {
  let filteredProducts = productsData.filter(
    (product) => product.category === category,
  );

  return filteredProducts;
}
