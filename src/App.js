import React, { useState } from 'react';
import productsData from './products';
import ProductList from './components/ProductList';
import FilterSort from './components/FilterSort';
import {
  AppContainer,
  AppHeader,
  AppTitle,
  MainContainer,
} from './AppStyles';

function App() {
  const [products, setProducts] = useState(productsData);
  const [filteredCategory, setFilteredCategory] = useState('');
  const [sortedPrice, setSortedPrice] = useState('');

  const handleFilter = (category) => {
    setFilteredCategory(category);
    const filteredProducts = category
      ? productsData.filter((product) => product.category === category)
      : productsData;
    setProducts(filteredProducts);
  };

  const handleSort = (sortOption) => {
    setSortedPrice(sortOption);
    let sortedProducts = [...products];
    if (sortOption === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Product Listing</AppTitle>
        <FilterSort handleFilter={handleFilter} handleSort={handleSort} />
      </AppHeader>
      <MainContainer>
        <ProductList products={products} />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
