import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from "redux-thunk"
import graphic from './Reducers/Graphic'

const rootReducer = combineReducers({
  graphic
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunkMiddleware,
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);

export default store;
