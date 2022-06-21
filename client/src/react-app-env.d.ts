/// <reference types="react-scripts" />

export const initialState: RootState = {
  tickersList: [],
  userTickersList: [],
};

export interface Tickers {
  ticker: string,
  exchange: string,
  price: number,
  change: number,
  change_percent: number,
  dividend: number,
  yield: number,
  last_trade_time: string,
}

export interface RootState {
  tickersList: Tickers[];
  userTickersList: Tickers[] | [];
}

export type loadTickersActionType = {
  type: typeof LOAD_TICKERS,
  payload: Tickers[]
}
export type addTickerActionType = {
  type: typeof ADD_TICKER,
  payload: Tickers,
}
export type deleteTickerActionType = {
  type: typeof DELETE_TICKER,
  payload: string,
}
