import { AnyAction } from 'redux';
import { InitialStateCategory } from '../../../types';
import {
  SEARCH_CATEGORY_BEGIN,
  SEARCH_CATEGORY_SUCCESS,
  SEARCH_CATEGORY_ERROR,
  SEARCH_CATEGORY_CLEAR,
} from '../../actions/categoryAction';

const initialState: InitialStateCategory = {
  isLoading: false,
  dataCategory: null,
};

function searchCategory(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_CATEGORY_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case SEARCH_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataCategory: action.payload,
      };

    case SEARCH_CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case SEARCH_CATEGORY_CLEAR:
      return {
        ...state,
        dataCategory: null,
      };
    default:
      return state;
  }
}

export default searchCategory;
