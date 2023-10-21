import PropTypes from "prop-types";
import { FilterItem } from "../filter-item";
import { useCallback } from "react";

export const FilterList = ({ setFilterBy, filterBy }) => {
  const filterItemData = [
    {
      id: 0,
      itemText: "Gainers",
      itemIcon: "trending_up",
    },
    {
      id: 1,
      itemText: "Losers",
      itemIcon: "trending_down",
    },
    {
      id: 2,
      itemText: "Best dividends",
      itemIcon: "monetization_on",
    },
  ];
  const handleReset = useCallback(() => setFilterBy(""), []);

  return (
    <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-start gap-5 w-full">
      <div className="flex gap-10 items-center">
        <p className="font-medium">Filter by</p>
        {filterBy && (
          <button
            className="text-red-500 border-transparent bg-white hover:text-red-600 active:text-red-700"
            onClick={handleReset}
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex gap-2 flex-wrap max-w-xs">
        {filterItemData.map(({ id, itemText, itemIcon }) => (
          <FilterItem
            key={id}
            itemIcon={itemIcon}
            itemText={itemText}
            filterBy={filterBy}
            setFilterBy={setFilterBy}
          />
        ))}
      </div>
    </div>
  );
};

FilterList.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
};
