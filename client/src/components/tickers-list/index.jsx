import { TickerItem } from "../ticker-item";

export const TickersList = ({ tickers }) => {
  return (
    <div className="flex flex-col">
      {tickers.map((ticker) => (
        <TickerItem tickerItem={ticker} key={ticker.ticker} />
      ))}
    </div>
  );
};
