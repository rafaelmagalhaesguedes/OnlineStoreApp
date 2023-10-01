import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductType, GlobalStateType, Dispatch } from '../../types';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import Aside from '../../components/Aside/Aside';
import { searchClear } from '../../redux/actions/searchAction';
import { fetchCategoryByID } from '../../redux/actions/categoryAction';
import {
  ErrorMessageText,
  ErrorMessageWrapper,
} from './SearchNoFound/styles';
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

function Home() {
  const dispatch: Dispatch = useDispatch();

  const { dataSearch, loadingSearch, errorMessage } = useSelector(
    (state: GlobalStateType) => state.searchReducer,
  );

  const { dataCategoryById, loadingCategoryId, errorCategory } = useSelector(
    (state: GlobalStateType) => state.searchCategoryById,
  );

  const { dataCategory } = useSelector(
    (state: GlobalStateType) => state.searchCategory,
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
            {dataSearch !== null ? (
              <>
                {dataSearch.map((prod) => (
                  <Product data-testid="product" key={ prod.id }>
                    <ProductCard productData={ prod } addCart={ handleAddCart } />
                  </Product>
                ))}
              </>
            ) : (
              <ErrorMessageWrapper isVisible={ errorMessage }>
                <ErrorMessageText>Nenhum produto foi encontrado</ErrorMessageText>
              </ErrorMessageWrapper>
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
              <ErrorMessageWrapper isVisible={ errorCategory }>
                <ErrorMessageText>Nenhum produto foi encontrado</ErrorMessageText>
              </ErrorMessageWrapper>
            )}
          </SearchResult>
        )}

        {(dataSearch === null && dataCategoryById === null
          && !loadingCategoryId && !loadingSearch) && (
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
