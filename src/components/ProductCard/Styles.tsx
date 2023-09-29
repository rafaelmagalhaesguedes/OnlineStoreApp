import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 300px;
`;

export const Image = styled.img`
  width: 160px;
  height: 209px;
`;

export const LinkCard = styled(Link)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 10px;
  text-decoration: none;

  p {
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 1; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }
`;

export const Price = styled.p`
  color: #444955;
  font-size: 20px;
  font-weight: 600;
  line-height: 21px;

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #B0B3BB;
  }
`;

export const ButtonAddCart = styled.button`
  width: 13rem;
  height: 38px;
  background: #31C28D;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
`;
