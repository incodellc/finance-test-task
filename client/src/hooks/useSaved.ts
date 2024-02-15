import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import { useTickers } from "./useTickers";

export const useSaved = () => {
  const allTickers = useTickers();
  const hideedTickers = useSelector(
    (state: RootState) => state.tickers.hideTickers
  );
  const savedTickers = useSelector((state: RootState) => state.tickers.tickers);

  const tickers = allTickers.filter(
    (ticker) =>
      !hideedTickers.some((hideed) => hideed.ticker === ticker.ticker) &&
      savedTickers.some((saved) => saved.ticker === ticker.ticker)
  );

  return tickers;
};
