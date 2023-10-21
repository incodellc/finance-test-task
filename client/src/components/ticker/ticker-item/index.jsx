import { useCallback, useEffect, useState } from "react";
import { TickerBadge } from "../../../ui-toolkit/ticker-badge";
import { TickerPriceChanges } from "../../../ui-toolkit/ticker-price-changes";
import PropTypes from "prop-types";
import classNames from "classnames";

export const TickerItem = ({
  tickerItem,
  watchList,
  setWatchList,
  activeTicket,
  setActiveTicket,
  unwatchedTickers,
  setUnwatchedTickers,
}) => {
  const { ticker, price, change, change_percent } = tickerItem;
  const [isAdded, setIsAdded] = useState(false);
  const isUnwatch = unwatchedTickers.includes(ticker);

  useEffect(() => {
    setIsAdded(watchList.map(tickerItem => tickerItem.ticker).includes(ticker));
  }, [watchList]);

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

  const handleAdd = useCallback(
    (tickerItem) => {
      !watchList.some(({ ticker }) => ticker === tickerItem.ticker)
        ? setWatchList([...watchList, tickerItem])
        : setWatchList(
          watchList.filter(({ ticker }) => ticker !== tickerItem.ticker)
        );
    },
    [watchList, setWatchList]
  );
  const wrapperClass = classNames(
    "w-full flex items-ceter justify-between gap-24 border-t border-t-slate-200 border-b border-b-slate-200 py-2.5 pr-5 hover:bg-slate-100 cursor-pointer",
    {
      "bg-slate-100": activeTicket === ticker,
    }
  );

  const switchButtonClass = classNames(
    "py-2 px-4 hover:flex hover:justify-center text-white uppercase rounded-lg",
    {
      "bg-rose-600": !isUnwatch,
      "hover:bg-rose-700": !isUnwatch,
      "active:bg-rose-900": !isUnwatch,
      "bg-green-600": isUnwatch,
      "hover:bg-green-700": isUnwatch,
      "active:bg-green-900": isUnwatch,
    }
  );

  const handleClick = useCallback(() => {
    !isUnwatch
      ? setUnwatchedTickers([...unwatchedTickers, ticker])
      : setUnwatchedTickers(
        unwatchedTickers.filter((tickerName) => tickerName !== ticker)
      );
  }, [isUnwatch, unwatchedTickers]);

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => setActiveTicket(ticker)}
      onMouseLeave={() => setActiveTicket("")}
    >
      <div className="flex gap-2.5 items-center">
        <TickerBadge tickerName={ticker} />
        <p className="font-medium">{getTickerName(ticker)}</p>
      </div>
      <div className="flex items-center gap-10">
        {!isUnwatch && (
          <>
            <p className="font-bold">{`${price} $`}</p>
            <TickerPriceChanges
              change={change}
              changePercent={change_percent}
              price={price}
              handleAdd={handleAdd}
              ticker={tickerItem}
              isAdded={isAdded}
            />
          </>
        )}
        <button className={switchButtonClass} onClick={handleClick}>
          {!isUnwatch ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

TickerItem.propTypes = {
  tickerItem: PropTypes.object,
  setWatchList: PropTypes.func,
  watchList: PropTypes.array,
  activeTicket: PropTypes.string,
  setActiveTicket: PropTypes.func,
  unwatchedTickers: PropTypes.array,
  setUnwatchedTickers: PropTypes.func,
};
