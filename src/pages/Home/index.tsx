import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductType, GlobalStateType, Dispatch } from '../../types';
import ProductCard from '../../components/ProductCard/ProductCard';
import Aside from '../../components/Aside/Aside';
import Loading from '../../components/Loading/Loading';
import { fetchCategoryByID } from '../../redux/actions/categoryAction';
import {
  fetchSearchById,
  searchCategoryClear,
} from '../../redux/actions/searchCategoryAction';
import {
  InitialMessage,
  Main,
  Section,
  Title,
  TextMessage,
  SearchResult,
  Product,
} from './styles';
import { searchClear } from '../../redux/actions/searchAction';

function Home() {
  const dispatch: Dispatch = useDispatch();

  const { dataSearch, loadingSearch } = useSelector(
    (state: GlobalStateType) => state.searchReducer,
  );

  const { dataCategory } = useSelector(
    (state: GlobalStateType) => state.searchCategory,
  );

  const { dataCategoryById, loadingCategoryId } = useSelector(
    (state: GlobalStateType) => state.searchCategoryById,
  );

  const [cart, setCart] = useState<ProductType[]>([]);

  const handleSearchByCategory = async (id: string) => {
    dispatch(searchClear());
    dispatch(searchCategoryClear());
    dispatch(fetchSearchById(id));
  };

  const handleAddCart = (product: ProductType) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

  useEffect(() => {
    dispatch(fetchCategoryByID());
  }, [dispatch]);

  return (
    <Main>
      <Aside
        categories={ dataCategory }
        searchByCategory={ handleSearchByCategory }
      />

      <Section>
        {loadingSearch ? (
          <Loading />
        ) : (
          <SearchResult>
            {dataSearch ? (
              <>
                {dataSearch.map((prod) => (
                  <Product data-testid="product" key={ prod.id }>
                    <ProductCard productData={ prod } addCart={ handleAddCart } />
                  </Product>
                ))}
              </>
            ) : (
              <div>
                <p className="search-error-message">Nenhum produto foi encontrado</p>
              </div>
            )}
          </SearchResult>
        )}

        {loadingCategoryId ? (
          <Loading />
        ) : (
          <SearchResult>
            {dataCategoryById !== null ? (
              <>
                {dataCategoryById.map((prod) => (
                  <Product data-testid="product" key={ prod.id }>
                    <ProductCard productData={ prod } addCart={ handleAddCart } />
                  </Product>
                ))}
              </>
            ) : (
              <div
                style={
                  dataCategoryById === null ? { display: 'none' } : { display: 'block' }
                }
              >
                <p className="search-error-message">Nenhum produto foi encontrado</p>
              </div>
            )}
          </SearchResult>
        )}

        {(!dataSearch && !dataCategoryById) && (
          <InitialMessage data-testid="home-initial-message">
            <Title>Você ainda não realizou uma busca</Title>
            <TextMessage>
              Digite algum termo de pesquisa ou escolha uma categoria
            </TextMessage>
          </InitialMessage>
        )}
      </Section>
    </Main>
  );
}

export default Home;
