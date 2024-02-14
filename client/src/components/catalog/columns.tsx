import { TickerData } from "@/types/ticker";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TickerData>[] = [
  {
    accessorKey: "ticker",
    header: "Ticker",
  },
  {
    accessorKey: "exchange",
    header: "Exchange",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "change",
    header: () => <div className="text-right">Change</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("change"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "change_percent",
    header: "change_percent",
  },
  {
    accessorKey: "dividend",
    header: "dividend",
  },
  {
    accessorKey: "yield",
    header: "yield",
  },
  {
    accessorKey: "last_trade_time",
    header: "last_trade_time",
  },
];
