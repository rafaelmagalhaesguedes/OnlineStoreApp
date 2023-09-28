import { ProductType, Dispatch } from '../../types';

export const searchBegin = () => (
  { type: 'SEARCH_BEGIN' }
);

export const searchSuccess = (search: ProductType) => (
  { type: 'SEARCH_SUCCESS', search }
);

export const searchFailure = (error: string) => (
  { type: 'SEARCH_ERROR', error }
);

export function fetchCharacter(query: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchBegin());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${query}`);
      const data: ProductType[] = await response.json();
      console.log(data);
      dispatch(searchSuccess(data[0]));
    } catch (error: any) {
      dispatch(searchFailure(error.message));
    }
  };
}
