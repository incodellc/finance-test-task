import { useMemo } from "react";

import { PersonalTickersListProps } from "./PersonalTickersList.types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteTicker } from "../../redux/slice/quoteSlice";
import { Quote, Tickers } from "../../types/quote";

export const usePersonalTickersList = (props: PersonalTickersListProps) => {
  const { applyQuery } = props;
  const dispatch = useAppDispatch();
  const { personalTickers, quotes } = useAppSelector((state) => state.quote);

  const userTickers = useMemo(
    () => personalTickers
      .map((ticker) => quotes.find((quote) => quote.ticker === ticker))
      .filter((quote) => (
        quote?.ticker
          .toLowerCase().includes(applyQuery.toLowerCase()))) as Quote[],
    [personalTickers, quotes, applyQuery]
  );

  const handleDelete = (ticker: Tickers) => {
    dispatch(deleteTicker(ticker));
  };

  return {
    personalTickers, handleDelete, quotes, userTickers
  };
};
