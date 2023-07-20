import { useCallback, useState } from "react";
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
}) => {
  const { ticker, price, change, change_percent } = tickerItem;
  const [isAdded, setIsAdded] = useState(false);

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
      setIsAdded(!isAdded);

      !watchList.some(({ ticker }) => ticker === tickerItem.ticker)
        ? setWatchList([...watchList, tickerItem])
        : setWatchList(
          watchList.filter(({ ticker }) => ticker !== tickerItem.ticker)
        );
    },
    [watchList, setWatchList, isAdded, setIsAdded]
  );
  const wrapperClass = classNames(
    "w-full flex items-ceter justify-between gap-24 border-t border-t-slate-200 border-b border-b-slate-200 py-2.5 pr-5 hover:bg-slate-100 cursor-pointer",
    {
      "bg-slate-100": activeTicket === ticker,
    }
  );

  return (
    <div className={wrapperClass} onMouseEnter={() => setActiveTicket(ticker)} onMouseLeave={() => setActiveTicket("")}>
      <div className="flex gap-2.5 items-center">
        <TickerBadge tickerName={ticker} />
        <p className="font-medium">{getTickerName(ticker)}</p>
      </div>
      <div className="flex items-center gap-10">
        <p className="font-bold">{`${price} $`}</p>
        <TickerPriceChanges
          change={change}
          changePercent={change_percent}
          price={price}
          handleAdd={handleAdd}
          ticker={tickerItem}
          isAdded={isAdded}
        />
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
};
