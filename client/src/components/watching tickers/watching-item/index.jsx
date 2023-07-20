import { useCallback, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { TickerBadge } from "../../../ui-toolkit/ticker-badge";

export const WatchingItem = ({
  tickerItem,
  tickers,
  watchTickers,
  setWatchTickers,
}) => {
  const { ticker, price, change, change_percent } = tickerItem;
  const priceChanged = (Number(price) - Number(change)).toFixed(2);
  const containerClass = classNames("flex", "items-center", "gap-4", {
    "text-green-600": priceChanged > 0,
    "text-red-600": priceChanged < 0,
  });
  const arrowClasses = classNames("material-symbols-outlined", {
    "rotate-180": priceChanged < 0,
  });
  const priceBadgeClasses = classNames(
    "p-2 flex gap-1 items-center border border-transparent rounded-lg",
    {
      "bg-green-50": priceChanged > 0,
      "bg-red-50": priceChanged < 0,
    }
  );

  const getTickerName = useCallback((tickerName) => {
    switch (tickerName) {
    case "AAPL":
      return "Apple";
    case "GOOGL":
      return "Alphabet";
    case "MSFT":
      return "Microsoft";
    case "AMZN":
      return "Amazon";
    case "FB":
      return "Meta";
    case "TSLA":
      return "Tesla";
    default:
      return "Monobank";
    }
  }, []);

  const watchingTickersNames = watchTickers.map(({ ticker }) => ticker);

  useEffect(() => {
    setWatchTickers(
      tickers.filter(({ ticker }) => watchingTickersNames.includes(ticker))
    );
  }, [tickers]);

  return (
    <div className="w-full flex items-ceter justify-between gap-24 cursor-pointer border border-transparent hover:bg-slate-50">
      <div className="flex gap-5 items-center">
        <TickerBadge tickerName={ticker} />
        <p className="font-medium">{getTickerName(ticker)}</p>
      </div>
      <div className={containerClass} key={ticker}>
        <p>{priceChanged > 0 ? `+${priceChanged}$` : `${priceChanged}$`}</p>
        <div className="flex items-center gap-2">
          <div className={priceBadgeClasses}>
            <span className={arrowClasses}>arrow_upward</span>
            <p>{`${change_percent}%`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

WatchingItem.propTypes = {
  tickerItem: PropTypes.object,
  tickers: PropTypes.array,
  watchTickers: PropTypes.array,
  setWatchTickers: PropTypes.func,
};
