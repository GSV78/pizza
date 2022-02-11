import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  pizza: pizzaReducer,
  filter: filterReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
