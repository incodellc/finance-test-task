import PropTypes from "prop-types";

export const WatchingList = ({ watchTickers }) => {
  console.log(watchTickers);
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-medium">Watching list</p>
      <div className="border border-slate-200 flex flex-col py-10 px-5 items-start rounded-lg">
        {!watchTickers.length ? (
          <p className="font-medium">
            There will be tickers that you are watching
          </p>
        ) : (
          watchTickers.map(({ ticker }) => <p key={ticker}>{ticker}</p>)
        )}
      </div>
    </div>
  );
};

WatchingList.propTypes = {
  watchTickers: PropTypes.array,
};
