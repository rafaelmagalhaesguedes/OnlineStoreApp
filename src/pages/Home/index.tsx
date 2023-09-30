import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductType, GlobalStateType, Dispatch } from '../../types';
import Aside from '../../components/Aside/Aside';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import { getCategoryById } from '../../services/api';
import { searchClear } from '../../redux/actions/searchAction';
import {
  fetchCategoryByID,
  searchCategoryClear,
} from '../../redux/actions/categoryAction';
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

  const [searchCategory, setSearchCategory] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const handleSearchByCategory = async (id: string) => {
    setIsLoadingCategories(true); // Inicia o loading para categorias
    setSearchCategory([]);
    dispatch(searchClear()); // Limpa os resultados de busca por texto
    const product = await getCategoryById(id);
    setSearchCategory(product.results);
    setIsLoadingCategories(false); // Encerra o loading para categorias
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
        {isLoading ? (
          <Loading /> // Loading específico para categorias
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
              <div style={ { display: 'none' } }>
                <p className="search-error-message">Nenhum produto foi encontrado</p>
              </div>
            )}
          </SearchResult>
        )}

        {isLoadingCategories ? (
          <Loading /> // Loading específico para categorias
        ) : (
          <SearchResult>
            {searchCategory.length > 0 ? (
              <>
                {searchCategory.map((prod) => (
                  <Product data-testid="product" key={ prod.id }>
                    <ProductCard productData={ prod } addCart={ handleAddCart } />
                  </Product>
                ))}
              </>
            ) : (
              <div style={ { display: 'none' } }>
                <p className="search-error-message">Nenhum produto foi encontrado</p>
              </div>
            )}
          </SearchResult>
        )}

        {!dataSearch && !searchCategory.length && !isLoadingCategories && !isLoading && (
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
