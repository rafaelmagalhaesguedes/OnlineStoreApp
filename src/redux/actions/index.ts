import { getProductByQuery } from '../../services/api';
import { ProductType, Dispatch } from '../../types';

export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const searchBegin = () => ({
  type: SEARCH_BEGIN,
});

const searchSuccess = (data: ProductType) => (
  {
    type: SEARCH_SUCCESS,
    payload: data,
  }
);

const searchFailure = () => ({
  type: SEARCH_ERROR,
});

export function fetchSearchQuery(query: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchBegin());
      const { results } = await getProductByQuery(query);
      dispatch(searchSuccess(results));
    } catch (error: any) {
      console.log(error);
      dispatch(searchFailure());
    }
  };
}
