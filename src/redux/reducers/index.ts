import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import searchCategory from './categoryReducer';
import searchCategoryById from './searchCategoryReducer';

const rootReducer = combineReducers({
  searchReducer,
  searchCategory,
  searchCategoryById,
});

export default rootReducer;
