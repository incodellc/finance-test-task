import { useNavigate } from "react-router-dom";
import "../LandingPage.css";
import "../../../shared/PriceChange/PriceChange.css";
import { TickerLabel } from "./TickerLabel";
import { PriceChange } from "../../../shared/PriceChange/PriceChange";

export const TickerRow = ({
  success,
  ticker,
  price,
  change,
  change_percent,
}) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/ticker?name=${ticker}`);
  return (
    <div className="tickerRow" onClick={onClick}>
      <TickerLabel ticker={ticker} />
      <div>{`$${price}`}</div>
      <div className={`${success ? "up" : "down"}`}>{`${
        success ? "+" : "-"
      }$${change}`}</div>
      <PriceChange change_percent={change_percent} success={success} />
    </div>
  );
};
