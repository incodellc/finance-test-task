import classNames from "classnames";
import PropTypes from "prop-types";

export const TickerPriceChanges = ({ change, changePercent, price }) => {
  const priceChanged = (Number(price) - Number(change)).toFixed(2);

  const containerClass = classNames("flex", "items-center", "gap-4", {
    "text-green-600": priceChanged > 0,
    "text-red-600": priceChanged < 0,
  });
  const arrowClasses = classNames("material-symbols-outlined", {
    "rotate-180": priceChanged < 0,
  });
  const priceBadgeClasses = classNames(
    "p-2 flex gap-1 items-center border border-transparent rounded-lg",
    {
      "bg-green-50": priceChanged > 0,
      "bg-red-50": priceChanged < 0,
    }
  );

  return (
    <div className={containerClass}>
      <p>{priceChanged > 0 ? `+${priceChanged}$` : `${priceChanged}$`}</p>
      <div className="flex items-center gap-2">
        <div className={priceBadgeClasses}>
          <span className={arrowClasses}>arrow_upward</span>
          <p>{`${changePercent}%`}</p>
        </div>
        <button className="text-slate-400 hover:text-blue-400">
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
    </div>
  );
};

TickerPriceChanges.propTypes = {
  change: PropTypes.string,
  changePercent: PropTypes.string,
  price: PropTypes.string,
};
