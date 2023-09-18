import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import { ProductType } from '../types';
import iconCart from '../images/icon-shopping-cart.png';

//
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const fetchProductsId = async () => {
      if (id) {
        const result = await getProductById(id);
        console.log(result);
        setProduct(result);
      }
    };
    fetchProductsId();
  }, [id]);

  return (
    <>
      <h1>ProductDetails</h1>
      <Link to="/shoppingcart" data-testid="shopping-cart-button">
        <img
          className="icon-shopping-cart"
          src={ iconCart }
          alt="Link Shopping Cart"
        />
      </Link>
      {product ? (
        <>
          <section>
            <li data-testid="product-detail-name">{product.title}</li>
            <li data-testid="product-detail-image">{product.thumbnail}</li>
            <li data-testid="product-detail-price">{product.price}</li>
          </section>
          <section>
            <h3>Descrição</h3>
            <ul>
              {product.attributes.map((attribute) => (
                <li
                  key={ attribute.name }
                >
                  { attribute.name }
                  :
                  { attribute.value_name }
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetails;
