import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: coral;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AppTitle = styled.h1`
  font-size: 2rem;
  margin-left: 25px;
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 25px;
`;

