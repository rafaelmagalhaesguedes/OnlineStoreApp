import { useEffect, useState } from 'react';
import { ProductType, CategoryType } from '../types';
import Aside from '../components/Aside/Aside';
import ProductCard from '../components/ProductCard/ProductCard';
import Loading from '../components/Loading/Loading';
import '../styles/home.css';
import {
  getCategories,
  getProductByQuery,
  getCategoryById,
} from '../services/api';
import {
  InitialMessage,
  Main,
  Section,
  Title,
  TextMessage,
  SearchResult,
  Product,
  Button,
} from '../components/Home/Styles';

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

  return (
    <Main>
      <Aside
        categories={ categories }
        searchByCategory={ handleSearchByCategory }
      />

      <Section>
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
        </div>

        {results.length === 0 && !loading && (
          <InitialMessage data-testid="home-initial-message">
            <Title>Você ainda não realizou uma busca</Title>
            <TextMessage>
              Digite algum termo de pesquisa ou escolha uma categoria
            </TextMessage>
          </InitialMessage>
        )}

        {loading ? (
          <Loading />
        ) : (
          <SearchResult>
            {results.length > 0 ? (
              <>
                {results.map((prod) => (
                  <Product data-testid="product" key={ prod.id }>
                    <ProductCard
                      productData={ prod }
                    />

                    <Button
                      data-testid="product-add-to-cart"
                      onClick={ (e) => {
                        e.preventDefault();
                        handleAddCart(prod);
                      } }
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </Product>
                ))}
              </>
            ) : (
              <div
                style={ { display: resultState === false ? 'none' : 'block' } }
              >
                <p className="search-error-message">Nenhum produto foi encontrado</p>
              </div>
            )}
          </SearchResult>
        )}

      </Section>
    </Main>
  );
}

export default Home;
