export const TickersList = ({ tickers }) => {
  return (
    <>
      {tickers.map(({ticker}) => (
        <div key={ticker}>{ticker}</div>
      ))}
    </>
  );
};
