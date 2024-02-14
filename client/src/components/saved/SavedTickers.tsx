import { useCatalog } from "@/hooks/useCatalog";
import { columns } from "../catalog/columns";
import { DataTable, DataTableActions } from "../ui/data-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { removeTicker } from "@/state/tickers/tickersSlice";

export const SavedTickers = () => {
  const catalogTickers = useCatalog();
  const savedTickers = useSelector((state: RootState) => state.tickers.tickers);

  const tickers = catalogTickers.filter((ticker) =>
    savedTickers.some((savedTicker) => savedTicker.ticker === ticker.ticker)
  );

  const dispatch = useDispatch();

  const actions: DataTableActions = {
    actions: [
      {
        label: "Remove from saved",
        action: (arg: any) => {
          return () => dispatch(removeTicker(arg));
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tickers} actions={actions.actions} />
    </div>
  );
};
