import { ProductType } from '../../types';
import { ButtonAddCart, Card, Image, LinkCard, Price } from './Styles';

type ProductCardProps = {
  productData: ProductType,
  addCart: (productData: ProductType) => void;
};

function ProductCard({ productData, addCart } : ProductCardProps) {
  const { id, title, thumbnail, price } = productData;

  return (
    <Card>
      <Image src={ thumbnail } alt={ title } />
      <LinkCard to={ `/productdetails/${id}` } data-testid="product-detail-link">
        <p>{title}</p>
      </LinkCard>
      <Price>
        <span>R$</span>
        {' '}
        {price}
      </Price>

      <ButtonAddCart
        data-testid="product-add-to-cart"
        onClick={ (e) => {
          e.preventDefault();
          addCart(productData);
        } }
      >
        Adicionar ao Carrinho
      </ButtonAddCart>
    </Card>
  );
}

export default ProductCard;
