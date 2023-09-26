import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType, CategoryType } from '../types';
import ProductCard from '../components/ProductCard';
import iconCart from '../images/icon-cart.jpg';
import '../styles/home.css';
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
  const [cart, setCart] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchProduct = async () => {
    setLoading(true);
    const result = await getProductByQuery(search);
    setResults(result.results);
    if (result) {
      setResultState(true);
      setLoading(false);
    }
  };

  const handleSearchByCategory = async (id: string) => {
    setLoading(true);
    const product = await getCategoryById(id);
    setResults(product.results);
    if (product) {
      setResultState(true);
      setLoading(false);
    }
  };

  const handleAddCart = (product: ProductType) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
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
                  handleSearchByCategory(categorie.id);
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
                handleSearchProduct();
              } }
            >
              Procurar
            </button>

          </form>

          <Link
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            <img
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

                  <button
                    data-testid="product-add-to-cart"
                    className="button-add-cart"
                    onClick={ (e) => {
                      e.preventDefault();
                      handleAddCart(prod);
                    } }
                  >
                    Adicionar ao Carrinho
                  </button>
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
