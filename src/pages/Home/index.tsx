import { /* useEffect */ useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductType, /* CategoryType */ GlobalStateType } from '../../types';
/* import Aside from '../../components/Aside/Aside'; */
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import {
/* getCategories,
  getCategoryById, */
} from '../../services/api';
import {
  InitialMessage,
  Main,
  Section,
  Title,
  TextMessage,
  SearchResult,
  Product,
  /* Button, */
} from './styles';

function Home() {
  const { data, isLoading } = useSelector(
    (state: GlobalStateType) => state.searchReducer,
  );
  const [state/* setState */] = useState(false);/*
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [searchCategory, setSearchCategory] = useState<ProductType[]>([]); */
  const [cart, setCart] = useState<ProductType[]>([]);/*
  const [loading, setLoading] = useState(false); */
  /*
  const handleSearchByCategory = async (id: string) => {
    setLoading(true);
    const product = await getCategoryById(id);
    setSearchCategory(product.results);
    setLoading(false);
  }; */

  const handleAddCart = (product: ProductType) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

  /* useEffect(() => {
    const fetchApiCategories = async () => {
      const categorie = await getCategories();
      setCategories(categorie);
    };
    fetchApiCategories();
  }, []); */

  return (
    <Main>
      {/* <Aside
        categories={ categories }
        searchByCategory={ handleSearchByCategory }
      /> */}

      {/* <section>
        {searchCategory.length > 0 ? (
          <>
            {searchCategory.map((element) => (
              <div key={ element.id }>
                <p>{element.name}</p>
              </div>
            ))}
          </>
        )}
      </section> */}

      <Section>

        {data === null && !isLoading && (
          <InitialMessage data-testid="home-initial-message">
            <Title>Você ainda não realizou uma busca</Title>
            <TextMessage>
              Digite algum termo de pesquisa ou escolha uma categoria
            </TextMessage>
          </InitialMessage>
        )}

        {}

        {isLoading ? (
          <Loading />
        ) : (
          <SearchResult>
            {data !== null ? (
              <>
                {data.map((prod) => (
                  <Product data-testid="product" key={ prod.id }>
                    <ProductCard
                      productData={ prod }
                      addCart={ handleAddCart }
                    />
                  </Product>
                ))}
              </>
            ) : (
              <div
                style={ { display: state === false ? 'none' : 'block' } }
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
