import React from "react";
import { TickerChart } from "./TickerChart";
import { TickerInfo } from "./TickerInfo/TickerInfo";

export const TickerBody = ({ data, tickerData, price, change_percent }) => {
  const success = data[data.length - 1].success;
  return (
    <div className="tickerBody">
      <TickerChart
        data={data}
        success={success}
        price={price}
        change_percent={change_percent}
      />
      <TickerInfo success={success} tickerData={tickerData} />
    </div>
  );
};
