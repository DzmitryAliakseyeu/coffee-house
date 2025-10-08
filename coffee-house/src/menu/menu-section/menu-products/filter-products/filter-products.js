import { productsData } from '../../../../data/products-data';

export default function filterProducts(category) {
  console.log(category);
  const filteredProducts = productsData.filter(
    (product) => product.category === category,
  );
  console.log(filteredProducts);
  return filteredProducts;
}
