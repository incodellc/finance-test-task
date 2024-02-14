import { useCatalog } from "@/hooks/useCatalog";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export const Catalog = () => {
  const tickers = useCatalog();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tickers} />
    </div>
  );
};
