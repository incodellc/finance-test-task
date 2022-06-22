export const getInfoRow = (field) => {
  const infos = {
    ticker: "Ticker",
    exchange: "Exchange",
    price: "Current price",
    change: "Last change",
    change_percent: "Last change percent",
    dividend: "Dividend",
    yield: "Yield",
    last_trade_time: "Last trade time",
  };
  return infos[field];
};
