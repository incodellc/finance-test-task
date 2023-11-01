import { createStore, applyMiddleware, compose } from 'redux';
import { middlewares } from './middlewares';
import { rootReducer } from '../reducers/rootReducer';

const middlewarwEnhancer = applyMiddleware(...middlewares);
const composeEnhancer = compose(middlewarwEnhancer);

export const store = createStore(rootReducer, composeEnhancer);
