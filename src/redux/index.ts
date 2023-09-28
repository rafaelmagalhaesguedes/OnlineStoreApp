//
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducer';

const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
