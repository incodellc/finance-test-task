import { useSelector } from "react-redux";
import "./LandingPage.css";
import { TickerTable } from "./TickerTable/TickerTable";

export const LandingPage = () => {
  const tickers = useSelector((state) => state.tickers);
  const charts = useSelector((state) => state.chart);
  return (
    <div className="landingPage">
      <TickerTable charts={charts} tickers={tickers} />
    </div>
  );
};
