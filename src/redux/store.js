import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cartReducer from './cartReducer';
import homeReducer from './homeReducer';

let reducers = combineReducers({
  home: homeReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
console.log(store.getState());

export default store;
