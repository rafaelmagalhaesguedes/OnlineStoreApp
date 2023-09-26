import styled from 'styled-components';

export const Main = styled.main`
  background: #F5F5F5;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const InitialMessage = styled.div`
  padding-top: 150px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #31C28D;
  padding: 20px 0;
  font-family: Epilogue;
  font-size: 30px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: 0.055em;  
`;

export const TextMessage = styled.p`
  color: #94979D;
  font-family: Epilogue;
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;

export const SearchResult = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Product = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  height: 20rem;
  width: 15rem;
  margin: 25px;
`;

export const Button = styled.button`
  padding: 5px;
`;
