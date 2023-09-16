import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  return (
    <div>
      <Link to="/">Voltar</Link>
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    </div>
  );
}
