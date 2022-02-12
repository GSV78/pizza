import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './homeReducer';

let reducers = combineReducers({ home: homeReducer });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
console.log(store.getState());

export default store;
