import { TickerItem } from "../ticker-item";
import PropTypes from "prop-types";

export const TickersList = ({
  tickers,
  setWatchList,
  watchList,
  activeTicket,
  setActiveTicker,
  unwatchedTickers,
  setUnwatchedTickers,
}) => {
  return (
    <div className="flex flex-col">
      {tickers.map((ticker) => (
        <TickerItem
          tickerItem={ticker}
          key={ticker.ticker}
          setWatchList={setWatchList}
          watchList={watchList}
          activeTicket={activeTicket}
          setActiveTicket={setActiveTicker}
          unwatchedTickers={unwatchedTickers}
          setUnwatchedTickers={setUnwatchedTickers}
        />
      ))}
    </div>
  );
};

TickersList.propTypes = {
  tickers: PropTypes.array,
  setWatchList: PropTypes.func,
  watchList: PropTypes.array,
  activeTicket: PropTypes.string,
  setActiveTicker: PropTypes.func,
  unwatchedTickers: PropTypes.array,
  setUnwatchedTickers: PropTypes.func,
};
