import { Link } from 'react-router-dom';
import { ProductType } from '../types';

type ProductCardProps = {
  productData: ProductType,
};

function ProductCard({ productData } : ProductCardProps) {
  const { id, title, thumbnail, price } = productData;

  return (
    <div>
      <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
        <p>
          {title}
        </p>
        <p>
          <img src={ thumbnail } alt={ title } />
        </p>
        <p>
          R$:
          {' '}
          {price}
        </p>
      </Link>
    </div>
  );
}

export default ProductCard;
