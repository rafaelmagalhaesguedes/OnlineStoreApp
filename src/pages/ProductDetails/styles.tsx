import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerProductDetails = styled.section`
  background: #F5F5F5;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;
`;

export const SectionProduct = styled.section`
  padding: 20px 0;
  width: 40%;
`;

export const LinkToBack = styled(Link)`
  margin: 30px;
`;

export const PanelProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0px 4px 15px 0px #00000040;
  width: 450px;
  height: 516px;
  padding: 0 15px;
  margin: 20px 35px;
`;

export const ProductName = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  padding-top: 43px;
`;

export const ProductImage = styled.img`
  width: 278px;
  height: 364px;
`;

export const SectionDetails = styled.section`
  width: 60%;
  padding: 40px;
  background: white;
`;

export const TitleProductDetails = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
  margin: 20px;
`;

export const ListDetails = styled.ul`
  padding-left: 20px;
  word-break: break-all;
  width: 25rem;
  overflow: scroll;
  height: 400px;
`;

export const ItemList = styled.li`
  color: #94979D;
  margin: 10px 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;

  p {
    color: #B0B3BB;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
  }

  .price {
    margin: 0 5px;
    color: #444955;
    font-size: 20px;
    font-weight: 600;
    line-height: 21px;
  }
`;

export const ButtonAddCart = styled.button`
  color: white;
  height: 38px;
  background: #31C28D;
  border: 1px solid #31C28D;
  font-size: 16px;
  font-weight: 600;
  margin-left: 100px;
  width: 244px;
  cursor: pointer;
`;
