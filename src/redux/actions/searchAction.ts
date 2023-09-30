import { getProductByQuery } from '../../services/api';
import { ProductType, Dispatch } from '../../types';

export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const SEARCH_CLEAR = 'SEARCH_CLEAR';

const searchBegin = () => ({
  type: SEARCH_BEGIN,
});

const searchSuccess = (dataSearch: ProductType) => (
  {
    type: SEARCH_SUCCESS,
    payload: dataSearch,
  }
);

const searchFailure = () => ({
  type: SEARCH_ERROR,
});

export const searchClear = () => ({
  type: SEARCH_CLEAR,
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
