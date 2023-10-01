import { AnyAction } from 'redux';
import { InitialStateSearchCategory } from '../../../types';
import {
  CATEGORY_BEGIN,
  CATEGORY_SUCCESS,
  CATEGORY_ERROR,
  CATEGORY_CLEAR,
} from '../../actions/searchCategoryAction';

const initialState: InitialStateSearchCategory = {
  loadingCategoryId: false,
  dataCategoryById: null,
  errorCategory: false,
};

function searchCategoryById(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CATEGORY_BEGIN:
      return {
        ...state,
        loadingCategoryId: true,
      };

    case CATEGORY_SUCCESS:
      return {
        ...state,
        loadingCategoryId: false,
        dataCategoryById: action.payload,
        errorCategory: false,
      };

    case CATEGORY_ERROR:
      return {
        ...state,
        loadingCategoryId: false,
        errorCategory: true,
      };

    case CATEGORY_CLEAR:
      return {
        ...state,
        dataCategoryById: null,
      };
    default:
      return state;
  }
}

export default searchCategoryById;
