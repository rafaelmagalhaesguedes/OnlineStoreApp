import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType, CategoryType } from '../types';
import ProductCard from '../components/ProductCard';
import iconCart from '../images/icon-shopping-cart.png';
import './home.css';
import {
  getCategories,
  getProductByQuery,
  getCategoryById,
} from '../services/api';

function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<ProductType[]>([]);
  const [resultState, setResultState] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const result = await getProductByQuery(search);
    setResults(result.results);
    if (result) {
      setResultState(true);
      setLoading(false);
    }
  };

  const handleSubmitCategory = async (id: string) => {
    setLoading(true);
    const product = await getCategoryById(id);
    setResults(product.results);
    if (product) {
      setResultState(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchApiCategories = async () => {
      const categorie = await getCategories();
      setCategories(categorie);
    };
    fetchApiCategories();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <aside className="search-categories">
        <h2>Categorias</h2>
        {categories.map((categorie) => (
          <div key={ categorie.id }>
            <label data-testid="category" htmlFor={ categorie.id }>
              <input
                type="radio"
                id={ categorie.id }
                name={ categorie.name }
                onChange={ (e) => {
                  e.preventDefault();
                  handleSubmitCategory(categorie.id);
                } }
              />
              { categorie.name }
            </label>
          </div>
        ))}
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
                    productData={ prod }
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
