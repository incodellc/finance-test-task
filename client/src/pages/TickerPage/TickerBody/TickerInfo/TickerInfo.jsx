import React from "react";
import { TickerInfoRow } from "./TickerInfoRow";

export const TickerInfo = ({ success, tickerData }) => {
  return (
    <div className="tickerInfo">
      {Object.keys(tickerData).map((ticker, index) => (
        <TickerInfoRow
          key={index}
          field={ticker}
          value={tickerData[ticker]}
          success={success}
        />
      ))}
    </div>
  );
};
