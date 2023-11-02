import React from 'react';
import Product from './Product';
import { ProductListContainer } from './ProductListStyles';

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
