import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import iconCart from '../images/icon-shopping-cart.png';

function Home() {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main>
      <nav>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            name="search"
            value={ search }
            onChange={ handleChange }
          />
        </form>

        <Link
          to="/shoppingcart"
          className="button-edit-profile"
        >
          <img
            data-testid="shopping-cart-button"
            className="icon-shopping-cart"
            src={ iconCart }
            alt="Link Shopping Cart"
          />
        </Link>
      </nav>

      <div className="search-result">
        {search ? (
          <h2>Resultado</h2>
        ) : (
          <p className="initial-message" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>

    </main>
  );
}

export default Home;
