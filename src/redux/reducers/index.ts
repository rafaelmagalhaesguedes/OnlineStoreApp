import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import searchCategory from './categoryReducer';

const rootReducer = combineReducers({
  searchReducer,
  searchCategory,
});

export default rootReducer;
