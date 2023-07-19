import { useCallback } from "react";
import { TickerBadge } from "../../ui-toolkit/ticker-badge";

export const TickerItem = ({ tickerItem }) => {
  const { ticker } = tickerItem;

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
    <div className="w-full flex items-ceter border-t border-t-slate-200 border-b border-b-slate-200 py-2.5 pr-2 hover:bg-slate-100 cursor-pointer">
      <div className="flex gap-2.5 items-center">
        <TickerBadge tickerName={ticker} />
        <p className="font-medium">{getTickerName(ticker)}</p>
      </div>
    </div>
  );
};
