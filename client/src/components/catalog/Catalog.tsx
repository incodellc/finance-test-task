import { useCatalog } from "@/hooks/useCatalog";
import { DataTable, DataTableActions } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useDispatch, useSelector } from "react-redux";
import { addTicker, hideTicker } from "@/state/tickers/tickersSlice";
import { RootState } from "@/state/store";

export const Catalog = () => {
  const allTickers = useCatalog();
  const dispatch = useDispatch();
  const hideedTickers = useSelector(
    (state: RootState) => state.tickers.hideTickers
  );

  const savedTickers = useSelector((state: RootState) => state.tickers.tickers);

  const actions: DataTableActions = {
    actions: [
      {
        label: "Add to saved",
        action: (arg: any) => {
          return () => dispatch(addTicker(arg));
        },
      },
      {
        label: "Hide ticker",
        action: (arg: any) => {
          return () => dispatch(hideTicker(arg));
        },
      },
    ],
  };

  let tickers = allTickers.filter(
    (ticker) =>
      !hideedTickers.some((hideed) => hideed.ticker === ticker.ticker) &&
      !savedTickers.some((saved) => saved.ticker === ticker.ticker)
  );

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tickers} actions={actions.actions} />
    </div>
  );
};
