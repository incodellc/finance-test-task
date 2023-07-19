import { useCallback } from "react";
import { TickerBadge } from "../../ui-toolkit/ticker-badge";
import { TickerPriceChanges } from "../../ui-toolkit/ticker-price-changes";
import PropTypes from "prop-types";

export const TickerItem = ({ tickerItem }) => {
  const { ticker, price, change, change_percent } = tickerItem;

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

  return (
    <div className="w-full flex items-ceter justify-between gap-24 border-t border-t-slate-200 border-b border-b-slate-200 py-2.5 pr-5 hover:bg-slate-100 cursor-pointer">
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
        />
      </div>
    </div>
  );
};

TickerItem.propTypes = {
  tickerItem: PropTypes.object,
};
