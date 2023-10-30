import { combineReducers, createStore, Store } from 'redux';
import tickerReducer from './tickerReducer';

const reducers = combineReducers({
  ticker: tickerReducer
});

const store: Store<RootState> = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
