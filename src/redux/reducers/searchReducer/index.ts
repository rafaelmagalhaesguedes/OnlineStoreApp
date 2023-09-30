import { AnyAction } from 'redux';
import { InitialState } from '../../../types';
import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_ERROR } from '../../actions';

const initialState: InitialState = {
  isLoading: false,
  data: null,
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
        data: action.payload,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default searchReducer;
