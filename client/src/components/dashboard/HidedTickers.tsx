import { DataTable, DataTableActions } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useDispatch } from "react-redux";
import { showTicker } from "@/state/tickers/tickersSlice";
import { useHided } from "@/hooks/useHided";

export const HidedTickers = () => {
  const tickers = useHided();
  const dispatch = useDispatch();

  const actions: DataTableActions = {
    actions: [
      {
        label: "Show ticker",
        action: (arg: any) => {
          return () => dispatch(showTicker(arg));
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
