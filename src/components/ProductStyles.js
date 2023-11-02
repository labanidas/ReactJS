import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 200px;
  object-fit: contain ;
  height: 200px;
`;

export const ProductTitle = styled.h2`
  margin: 8px 0;
  font-size: 1.5rem;
`;

export const ProductDescription = styled.p`
  color: #777;
`;

export const ProductPrice = styled.p`
  margin-top: 8px;
  font-weight: bold;
  font-size: 1.25rem;
  color: #333;
`;
