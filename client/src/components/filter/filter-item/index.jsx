import classNames from "classnames";
import PropTypes from "prop-types";
import { useCallback } from "react";

export const FilterItem = ({ setFilterBy, itemText, itemIcon, filterBy }) => {
  const buttonClasses = classNames(
    "border border-slate-200 p-1 flex gap-1 items-center hover:bg-slate-50 active:bg-slate-100 rounded-lg",
    { "bg-slate-100": filterBy.includes(itemText) }
  );

  const spanClasses = classNames("material-symbols-outlined", {
    "text-green-700": itemIcon === "trending_up",
    "text-red-700": itemIcon === "trending_down",
    "text-slate-700": itemIcon === "monetization_on",
  });

  const handleClick = useCallback(
    () =>
      !filterBy.includes(itemText)
        ? setFilterBy([...filterBy, itemText])
        : setFilterBy(filterBy.filter((item) => item !== itemText)),
    [itemText, filterBy]
  );

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <span className={spanClasses}>{itemIcon}</span>
      <p>{itemText}</p>
    </button>
  );
};

FilterItem.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
  itemText: PropTypes.string.isRequired,
  itemIcon: PropTypes.string.isRequired,
  filterBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};
