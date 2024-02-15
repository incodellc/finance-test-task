export enum Tickers {
  AAPL = "AAPL",
  GOOGL = "GOOGL",
  MSFT = "MSFT",
  AMZN = "AMZN",
  FB = "FB",
  TSLA = "TSLA",
}

export interface Quote {
  ticker: Tickers;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  dividend: string;
  yield: string;
  last_trade_time: Date;
}
