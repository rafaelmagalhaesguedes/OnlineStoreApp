import { AnyAction } from 'redux';
import { InitialStateSearch } from '../../../types';
import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  SEARCH_CLEAR,
} from '../../actions/searchAction';

const initialState: InitialStateSearch = {
  loadingSearch: false,
  dataSearch: null,
  errorMessage: false,
};

function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        loadingSearch: true,
        errorMessage: false,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        dataSearch: action.payload,
        errorMessage: false,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        loadingSearch: false,
        errorMessage: true,
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
