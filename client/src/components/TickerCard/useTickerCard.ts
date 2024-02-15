import { useAppDispatch } from "../../redux/hooks";
import { addTicker } from "../../redux/slice/quoteSlice";
import { Tickers } from "../../types/quote";

export const useTickerCard = (ticker: Tickers) => {
  const dispatch = useAppDispatch();

  const handleAddCard = () => {
    dispatch(addTicker(ticker));
  };

  return { handleAddCard };
};
