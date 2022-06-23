import "../LandingPage.css";
import { TickerRow } from "./TickerRow";

export const TickerTable = ({ charts, tickers }) => {
  return (
    <div className="tickerTable">
      <p className="tickerTableHeader">You may be interested in</p>

      {Object.keys(tickers).map((ticker, index) => {
        const charData = [...charts[ticker]];
        return (
          <TickerRow
            key={index}
            success={charData[charData.length - 1].success}
            ticker={tickers[ticker].ticker}
            price={tickers[ticker].price}
            change={tickers[ticker].change}
            change_percent={tickers[ticker].change_percent}
          />
        );
      })}
    </div>
  );
};
