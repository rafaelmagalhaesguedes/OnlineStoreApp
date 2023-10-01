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
  width: 100%;
`;

export const InitialMessage = styled.div`
  padding-top: 100px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #31C28D;
  padding: 20px 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 31px;
`;

export const TextMessage = styled.p`
  color: #94979D;
  font-size: 20px;
  font-weight: 500;
`;

export const SearchResult = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Product = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  width: 280px;
  height: 360px;
  margin: 10px;
`;

export const Button = styled.button`
  padding: 5px;
`;
