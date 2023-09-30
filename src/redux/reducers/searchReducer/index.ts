import { AnyAction } from 'redux';
import { InitialStateSearch } from '../../../types';
import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_CLEAR,
} from '../../actions/searchAction';

const initialState: InitialStateSearch = {
  isLoading: false,
  dataSearch: null,
};

function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataSearch: action.payload,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case SEARCH_CLEAR:
      return {
        ...state,
        dataSearch: null,
      };
    default:
      return state;
  }
}

export default searchReducer;
