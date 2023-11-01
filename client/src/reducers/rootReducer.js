import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';

export const rootReducer = combineReducers({
  stockReducer,
});
