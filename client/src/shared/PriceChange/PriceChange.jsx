import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/arrowUp.svg";

export const PriceChange = ({ change_percent, success }) => {
  return (
    <div className={`tickerChangePercent ${success ? "up" : "down"}`}>
      <div className="tickerPercent">
        <span className="tickerArrow">
          {success ? <ArrowUp /> : <ArrowDown />}
        </span>{" "}
        {`${change_percent}%`}
      </div>
    </div>
  );
};
