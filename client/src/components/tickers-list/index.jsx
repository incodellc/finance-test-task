import { TickerItem } from "../ticker-item";
import PropTypes from "prop-types";

export const TickersList = ({ tickers }) => {
  return (
    <div className="flex flex-col">
      {tickers.map((ticker) => (
        <TickerItem tickerItem={ticker} key={ticker.ticker} />
      ))}
    </div>
  );
};

TickersList.propTypes = {
  tickers: PropTypes.array,
};
