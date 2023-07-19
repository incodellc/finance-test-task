export const TickerPriceChanges = ({ change, changePercent }) => {
  return (
    <div className="flex items-center gap-4 text-green-600">
      <p>{change}</p>
      <div className="flex items-center gap-2">
        <div className="p-2 bg-green-50 flex gap-1 items-center border border-transparent rounded-lg">
          <span className="material-symbols-outlined">arrow_upward</span>
          <p>{`${changePercent}%`}</p>
        </div>
        <button className="text-slate-400 hover:text-blue-400">
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
    </div>
  );
};
