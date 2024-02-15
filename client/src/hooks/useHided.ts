import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export const useHided = () => {
  const hideedTickers = useSelector(
    (state: RootState) => state.tickers.hideTickers
  );
  return hideedTickers;
};
