import { useCatalog } from "@/hooks/useCatalog";
import { DataTable, DataTableActions } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useDispatch } from "react-redux";
import { addTicker } from "@/state/tickers/tickersSlice";

export const Catalog = () => {
  const tickers = useCatalog();
  const dispatch = useDispatch();

  const actions: DataTableActions = {
    actions: [
      {
        label: "Add to saved",
        action: (arg: any) => {
          return () => dispatch(addTicker(arg));
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
