import React, { useState } from 'react';
import { FilterSortContainer } from './FilterSortStyles';

const FilterSort = ({ handleFilter, handleSort }) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    handleFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    handleSort(event.target.value);
  };

  return (
    <FilterSortContainer>
      <label>
        Filter by Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Men">Shoes for Men</option>
          <option value="Women">shoes for Women</option>
          {/* --add more category options-- */}
        </select>
      </label>
      <label>
        Sort by Price:
        <select value={sort} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </label>
    </FilterSortContainer>
  );
};

export default FilterSort;
