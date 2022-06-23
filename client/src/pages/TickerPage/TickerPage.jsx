import { useSelector } from "react-redux";
import { useQuery } from "../../App";
import { getName } from "../../utils/getName";
import { TickerBody } from "./TickerBody/TickerBody";
import "./TickerPage.css";

export const TickerPage = () => {
  const query = useQuery();
  const currentTicker = query.get("name");
  const tickers = useSelector((state) => state.tickers);
  const data = useSelector((state) => state.chart[currentTicker]);

  let tickerData = {};
  Object.keys(tickers).map((ticker) =>
    tickers[ticker].ticker === currentTicker
      ? (tickerData = { ...tickers[ticker] })
      : null
  );
  return (
    <div className="tickerPage">
      <div className="tickerCodes">{`${tickerData.ticker} - ${tickerData.exchange}`}</div>
      <div className="tickerCodeName">{getName(tickerData.ticker)}</div>
      <div className="tickerLine" />
      <TickerBody
        data={data}
        tickerData={tickerData}
        price={tickerData.price}
        change_percent={tickerData.change_percent}
      />
    </div>
  );
};
