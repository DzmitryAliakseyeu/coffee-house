import { ProductsDataI } from '../../../../interfaces/interfaces';

export default function filterProducts(
  category: string,
  products: ProductsDataI[],
) {
  let filteredProducts = products.filter(
    (product: ProductsDataI) => product.category === category,
  );

  return filteredProducts;
}
