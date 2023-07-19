import { TickerItem } from "../ticker-item";

export const TickersList = ({ tickers }) => {
  return (
    <>
      {tickers.length > 0 && tickers.map((ticker) => (
        <TickerItem tickerItem={ticker} key={ticker.ticker} />
      ))}
    </>
  );
};
