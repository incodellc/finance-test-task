import { DataTable, DataTableActions } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useDispatch } from "react-redux";
import { addTicker, hideTicker } from "@/state/tickers/tickersSlice";
import { useHided } from "@/hooks/useHided";

export const HidedTickers = () => {
  const tickers = useHided();
  const dispatch = useDispatch();

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

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tickers} actions={actions.actions} />
    </div>
  );
};
