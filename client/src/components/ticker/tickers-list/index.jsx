import { TickerItem } from "../ticker-item";
import PropTypes from "prop-types";

export const TickersList = ({ tickers, setWatchList, watchList }) => {
  return (
    <div className="flex flex-col">
      {tickers.map((ticker) => (
        <TickerItem
          tickerItem={ticker}
          key={ticker.ticker}
          setWatchList={setWatchList}
          watchList={watchList}
        />
      ))}
    </div>
  );
};

TickersList.propTypes = {
  tickers: PropTypes.array,
  setWatchList: PropTypes.func,
  watchList: PropTypes.array,
};
