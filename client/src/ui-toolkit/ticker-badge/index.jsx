import { useCallback } from "react";
import classNames from "classnames"

export const TickerBadge = ({ tickerName }) => {

  const badgeClasses = classNames("py-0.5", "px-1", "border", "border-transparent", "rounded-lg", {
    "bg-gray-700": tickerName === "AAPL",
    "bg-red-700": tickerName === "GOOGL",
    "bg-slate-400": tickerName === "MSFT",
    "bg-amber-600": tickerName === "AMZN",
    "bg-cyan-700": tickerName === "FB",
    "bg-rose-400": tickerName === "TSLA",
  }, "text-white");

  return (
    <div className={badgeClasses}>
      {tickerName}
    </div>
  );
};
