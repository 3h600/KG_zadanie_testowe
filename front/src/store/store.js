import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/products.reducer';

export const store = createStore(productsReducer, composeWithDevTools());
