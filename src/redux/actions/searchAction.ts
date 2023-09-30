import { getProductByQuery, getCategories } from '../../services/api';
import { ProductType, Dispatch, CategoryType } from '../../types';

export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const searchBegin = () => ({
  type: SEARCH_BEGIN,
});

const searchSuccess = (dataSearch: ProductType) => (
  {
    type: SEARCH_SUCCESS,
    payload: dataSearch,
  }
);

const categorySuccess = (dataCategory: CategoryType) => (
  {
    type: SEARCH_SUCCESS,
    payload: dataCategory,
  }
);

const searchFailure = () => ({
  type: SEARCH_ERROR,
});

export function fetchSearchQuery(query: string) {
  return async (dispatch: Dispatch) => {
    dispatch(searchBegin());
    try {
      const { results } = await getProductByQuery(query);
      dispatch(searchSuccess(results));
    } catch (error: any) {
      console.log(error);
      dispatch(searchFailure());
    }
  };
}

export function fetchCategoryByID() {
  return async (dispatch: Dispatch) => {
    dispatch(searchBegin());
    try {
      const category = await getCategories();
      dispatch(categorySuccess(category));
    } catch (error: any) {
      console.log(error);
      dispatch(searchFailure());
    }
  };
}
