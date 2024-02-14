import { useCatalog } from "@/hooks/useCatalog";
import { columns } from "../catalog/columns";
import { DataTable } from "../ui/data-table";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export const SavedTickers = () => {
  const catalogTickers = useCatalog();
  const savedTickers = useSelector((state: RootState) => state.tickers.tickers);

  const tickers = catalogTickers.filter((ticker) =>
    savedTickers.includes(ticker.ticker)
  );

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tickers} />
    </div>
  );
};
