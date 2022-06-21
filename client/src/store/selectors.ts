import { RootState, Tickers } from '../react-app-env';

export const getTickersSelector = (state: RootState):Tickers[] => 
  state.tickersList;

export const getUserTickersSelector = (state: RootState):Tickers[] => 
  state.userTickersList;

