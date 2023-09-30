import { getCategoryById } from '../../services/api';
import { ProductType, Dispatch } from '../../types';

export const CATEGORY_BEGIN = 'CATEGORY_BEGIN';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';
export const CATEGORY_CLEAR = 'CATEGORY_CLEAR';

const searchBegin = () => ({
  type: CATEGORY_BEGIN,
});

const searchSuccess = (dataSearch: ProductType) => (
  {
    type: CATEGORY_SUCCESS,
    payload: dataSearch,
  }
);

const searchFailure = () => ({
  type: CATEGORY_ERROR,
});

export const searchCategoryClear = () => ({
  type: CATEGORY_CLEAR,
});

export function fetchSearchById(id: string) {
  return async (dispatch: Dispatch) => {
    dispatch(searchBegin());
    try {
      const { results } = await getCategoryById(id);
      dispatch(searchSuccess(results));
    } catch (error: any) {
      console.log(error);
      dispatch(searchFailure());
    }
  };
}
