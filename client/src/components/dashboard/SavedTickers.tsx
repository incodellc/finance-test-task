import { columns } from "./columns";
import { DataTable, DataTableActions } from "../ui/data-table";
import { useDispatch } from "react-redux";
import { hideTicker, removeTicker } from "@/state/tickers/tickersSlice";
import { useSaved } from "@/hooks/useSaved";

export const SavedTickers = () => {
  const tickers = useSaved();
  const dispatch = useDispatch();

  const actions: DataTableActions = {
    actions: [
      {
        label: "Remove",
        action: (arg: any) => {
          return () => dispatch(removeTicker(arg));
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
