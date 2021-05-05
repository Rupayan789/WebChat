import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootreducer';
import  logger from 'redux-logger' ;
const middleware=[thunk];
middleware.push(logger);
export const store=createStore(rootReducer,applyMiddleware(...middleware));