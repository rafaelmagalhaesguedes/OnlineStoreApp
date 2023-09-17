import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import iconCart from '../images/icon-shopping-cart.png';
import { getCategories } from '../services/api';

function Home() {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchApiCategories = async () => {
      const categorie = await getCategories();
      setCategories(categorie);
    };
    fetchApiCategories();
  }, []);

  return (
    <main>
      <aside className="search-categories">
        <h2>Categorias</h2>
        <div>
          <label data-testid="category" htmlFor="categoria1"> Categoria 1</label>
          <input type="radio" id="categoria1" />
        </div>

        <div>
          <label data-testid="category" htmlFor="categoria1"> Categoria 2</label>
          <input type="radio" id="categoria2" />
        </div>

        <div>
          <label data-testid="category" htmlFor="categoria1"> Categoria 3</label>
          <input type="radio" id="categoria3" />
        </div>
      </aside>

      <section>
        <div className="search-form">
          <form>
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
              data-testid=""
              className="icon-shopping-cart"
              src={ iconCart }
              alt="Link Shopping Cart"
            />
          </Link>
        </div>

        <div className="search-result">
          {search ? (
            <h2>Resultado</h2>
          ) : (
            <p className="initial-message" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
