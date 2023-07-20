import PropTypes from "prop-types";
import { WatchingItem } from "../watching-item";

export const WatchingList = ({
  watchTickers,
  tickers,
  setWatchTickers,
  activeTicket,
  setActiveTicket,
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-medium">Watching list</p>
      <div className="border border-slate-200 flex flex-col py-10 px-5 items-start rounded-lg">
        {!watchTickers.length ? (
          <p className="font-medium">
            There will be tickers that you are watching
          </p>
        ) : (
          watchTickers.map((ticker) => (
            <WatchingItem
              key={ticker.ticker}
              tickerItem={ticker}
              setWatchTickers={setWatchTickers}
              tickers={tickers}
              watchTickers={watchTickers}
              activeTicket={activeTicket}
              setActiveTicket={setActiveTicket}
            />
          ))
        )}
      </div>
    </div>
  );
};

WatchingList.propTypes = {
  watchTickers: PropTypes.array,
  tickers: PropTypes.array,
  setWatchTickers: PropTypes.func,
  activeTicket: PropTypes.string,
  setActiveTicket: PropTypes.func,
};
