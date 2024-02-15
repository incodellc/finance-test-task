import { columns } from "./columns";
import { DataTable, DataTableActions } from "../ui/data-table";
import { useDispatch } from "react-redux";
import { removeTicker } from "@/state/tickers/tickersSlice";
import { useSaved } from "@/hooks/useSaved";

export const SavedTickers = () => {
  const tickers = useSaved();
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
