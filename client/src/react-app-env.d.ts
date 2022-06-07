/// <reference types="react-scripts" />

export interface Tickers {
  ticker: string,
  exchange: string,
  price: number,
  change: number,
  change_percent: number,
  dividend: number,
  yield: number,
  last_trade_time: string,
};

export interface RootState {
  tickersList: Tickers[];
};
