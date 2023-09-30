import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductType, GlobalStateType, Dispatch } from '../../types';
import Aside from '../../components/Aside/Aside';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import { getCategoryById } from '../../services/api';
import { fetchCategoryByID } from '../../redux/actions/categoryAction';
import {
  InitialMessage,
  Main,
  Section,
  Title,
  TextMessage,
  SearchResult,
  Product,
} from './styles';

function Home() {
  const dispatch: Dispatch = useDispatch();
  const { dataSearch, isLoading } = useSelector(
    (state: GlobalStateType) => state.searchReducer,
  );

  const { dataCategory } = useSelector(
    (state: GlobalStateType) => state.searchCategory,
  );

  const [/* searchCategory */, setSearchCategory] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [state] = useState(false);

  const handleSearchByCategory = async (id: string) => {
    const product = await getCategoryById(id);
    setSearchCategory(product.results);
  };

  const handleAddCart = (product: ProductType) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

  useEffect(() => {
    dispatch(fetchCategoryByID());
  }, []);

  return (
    <Main>
      <Aside
        categories={ dataCategory }
        searchByCategory={ handleSearchByCategory }
      />

      <Section>

        {dataSearch === null && !isLoading && (
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
            {dataSearch !== null ? (
              <>
                {dataSearch.map((prod: any) => (
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
