import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types';

export default function ShoppingCart() {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart.map((product: any) => ({ ...product, quantity: 1 })));
  }, []);

  const handleRemoveProduct = (productId: string) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (productId: string) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === productId) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId: string) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === productId && cartItem.quantity > 1) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <Link to="/">Voltar</Link>
      <ul>
        <h1>Carrinho de Compras</h1>
        {cart.length > 0 ? (
          cart && cart.map((product) => (
            <li key={ product.id }>
              <p data-testid="shopping-cart-product-name">
                { product.title }
              </p>
              <p>
                <img src={ product.thumbnail } alt={ product.title } />
              </p>
              <p>
                Preço: $
                { product.price }
              </p>
              <p>
                Quantidade disponível:
                { product.available_quantity }
              </p>
              <button
                data-testid="remove-product"
                onClick={ () => handleRemoveProduct(product.id) }
              >
                Remover
              </button>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => handleDecreaseQuantity(product.id) }
              >
                Diminuir
              </button>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                {product.quantity}
              </p>
              <button
                data-testid="product-increase-quantity"
                onClick={ () => handleIncreaseQuantity(product.id) }
              >
                Aumentar
              </button>
            </li>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
      </ul>
    </div>
  );
}
