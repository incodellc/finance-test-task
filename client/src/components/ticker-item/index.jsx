export const TickerItem = ({ tickerItem }) => {
  const { ticker } = tickerItem;
  
  return <div key={ticker}>{ticker}</div>;
};
