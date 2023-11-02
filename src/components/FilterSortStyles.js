import styled from 'styled-components';

export const FilterSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  select {
    margin-top: 8px;
    padding: 8px;
  }
`;
