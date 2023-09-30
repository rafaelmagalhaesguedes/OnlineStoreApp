import { getCategories } from '../../services/api';
import { Dispatch, CategoryType } from '../../types';

export const SEARCH_CATEGORY_BEGIN = 'SEARCH_CATEGORY_BEGIN';
export const SEARCH_CATEGORY_SUCCESS = 'SEARCH_CATEGORY_SUCCESS';
export const SEARCH_CATEGORY_ERROR = 'SEARCH_CATEGORY_ERROR';

const searchCategoryBegin = () => ({
  type: SEARCH_CATEGORY_BEGIN,
});

const searchCategorySuccess = (dataCategory: CategoryType) => (
  {
    type: SEARCH_CATEGORY_SUCCESS,
    payload: dataCategory,
  }
);

const searchCategoryFailure = () => ({
  type: SEARCH_CATEGORY_ERROR,
});

export function fetchCategoryByID() {
  return async (dispatch: Dispatch) => {
    dispatch(searchCategoryBegin());
    try {
      const category = await getCategories();
      dispatch(searchCategorySuccess(category));
    } catch (error: any) {
      console.log(error);
      dispatch(searchCategoryFailure());
    }
  };
}
