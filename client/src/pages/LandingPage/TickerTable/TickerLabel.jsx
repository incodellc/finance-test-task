import React from "react";
import { getName } from "../../../utils/getName";

export const TickerLabel = ({ ticker }) => {
  return (
    <div className="tickerName">
      <div className={`tickerLabel ${ticker}`}>{ticker}</div>
      <div>{getName(ticker)}</div>
    </div>
  );
};
