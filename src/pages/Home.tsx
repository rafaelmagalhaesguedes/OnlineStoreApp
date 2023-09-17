import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductByQuery } from '../services/api';
import { ProductType } from '../types';
import ProductCard from '../components/ProductCard';
import iconCart from '../images/icon-shopping-cart.png';
import './home.css';

function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<ProductType[]>([]);
  const [resultState, setResultState] = useState(false);
  const [/* categories */, setCategories] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await getProductByQuery(search);
    setResults(result.results);
    console.log(result);
    if (result) {
      setResultState(true);
    }
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
              data-testid="query-input"
              className="form-input"
              type="text"
              name="search"
              value={ search }
              onChange={ handleChange }
            />
            <button
              data-testid="query-button"
              onClick={ (e) => {
                e.preventDefault();
                handleSubmit();
              } }
            >
              Procurar
            </button>

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

        {results.length === 0 && (
          <p className="initial-message" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}

        <div className="search-result">
          {results.length > 0 ? (
            <div>
              {results.map((prod) => (
                <div data-testid="product" key={ prod.id }>
                  <ProductCard
                    title={ prod.title }
                    thumbnail={ prod.thumbnail }
                    price={ prod.price }
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={ { display: resultState === false ? 'none' : 'block' } }
            >
              <p className="search-error-message">Nenhum produto foi encontrado</p>
            </div>
          )}
        </div>

      </section>
    </main>
  );
}

export default Home;
