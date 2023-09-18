import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types';

export default function ShoppingCart() {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  return (
    <div>
      <Link to="/">Voltar</Link>
      <ul>
        <h1>Carrinho de Compras</h1>
        {cart.length > 0 ? (
          cart && cart.map((product) => (
            <li key={ product.id }>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <p>
                Preço: $
                { product.price }
              </p>
              <p>
                Preço: $
                { product.available_quantity }
              </p>
              <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
            </li>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
      </ul>
    </div>
  );
}
