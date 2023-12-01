// configureStore.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
// import productReducer from '../reducers/productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // product: productReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
