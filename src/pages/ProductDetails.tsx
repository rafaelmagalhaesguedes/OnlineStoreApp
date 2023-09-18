import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import { ProductType } from '../types';
import iconCart from '../images/icon-shopping-cart.png';

//
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [myCart, setMyCart] = useState<ProductType[]>([]);
  let nextId = 1;

  const handleAddToCart = (objProduct: ProductType) => {
    objProduct.id = String(nextId);
    const updateCart = [...myCart, objProduct];
    setMyCart(updateCart);
    nextId++;
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

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
            <div className="product-details">
              <p data-testid="product-detail-name">{product.title}</p>
              <p data-testid="product-detail-image">{product.thumbnail}</p>
              <p data-testid="product-detail-price">{product.price}</p>
            </div>

            <button
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleAddToCart(product) }
            >
              Adicionar
            </button>
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
