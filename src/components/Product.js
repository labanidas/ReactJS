import React from 'react';
import { ProductContainer, ProductImage, ProductTitle, ProductDescription, ProductPrice } from './ProductStyles';

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={`/images/${product.image}`} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>Rs.{product.price.toFixed(2)}</ProductPrice>
    </ProductContainer>
  );
};

export default Product;
