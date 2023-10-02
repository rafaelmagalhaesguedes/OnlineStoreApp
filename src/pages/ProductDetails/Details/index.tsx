import React from 'react';
import { Link } from 'react-router-dom';
import iconBack from '../../../images/Voltar.png';
import {
  WrapperPanelProduct,
  PanelProduct,
  ProductImage,
  ProductName,
  SectionProduct,
  SectionDetails,
  TitleProductDetails,
  ListDetails,
  ItemList,
  WrapperButton,
  ButtonAddCart,
} from '../styles';
import { ProductType } from '../../../types';

type SectionProductDetailsProps = {
  product: ProductType,
  handleAddCart: (product: ProductType) => void;
};

function SectionProductDetails({
  product, handleAddCart } : SectionProductDetailsProps) {
  return (
    <SectionProduct>
      <WrapperPanelProduct>
        <Link to="/">
          <img src={ iconBack } alt="Voltar" />
        </Link>
        <PanelProduct>
          <ProductName data-testid="product-detail-name">
            {product.title}
          </ProductName>
          <ProductImage
            data-testid="product-detail-image"
            src={ product.thumbnail }
            alt={ product.title }
          />
        </PanelProduct>
      </WrapperPanelProduct>
      <SectionDetails>
        <TitleProductDetails>Especificações técnicas</TitleProductDetails>
        <ListDetails>
          {product.attributes.map((attribute) => (
            <ItemList key={ attribute.name }>
              {attribute.name}
              :
              {' '}
              {attribute.value_name}
            </ItemList>
          ))}
        </ListDetails>

        <WrapperButton>
          <p data-testid="product-detail-price">R$</p>
          <p className="price">{product.price}</p>

          <ButtonAddCart
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleAddCart(product) }
          >
            Adicionar ao Carrinho
          </ButtonAddCart>
        </WrapperButton>
      </SectionDetails>
    </SectionProduct>
  );
}

export default SectionProductDetails;
