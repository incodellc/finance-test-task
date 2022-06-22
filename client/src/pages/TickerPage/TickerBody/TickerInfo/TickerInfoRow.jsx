import { getInfoRow } from "../../../../utils/getInfoRow";
import { getValue } from "../../../../utils/getValue";
import { ReactComponent as ArrowDown } from "../../../../assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../../../../assets/arrowUp.svg";
import "../../../../shared/PriceChange/PriceChange.css";

export const TickerInfoRow = ({ field, value, success }) => {
  return (
    <div className="tickerInfoRow">
      <div className="field">{getInfoRow(field).toUpperCase()}</div>
      <div className="fieldValue">
        {field === "change_percent" ? (
          <span className="tickerArrow">
            {success ? <ArrowUp /> : <ArrowDown />}
          </span>
        ) : null}
        {getValue(field, value, success)}
      </div>
    </div>
  );
};
