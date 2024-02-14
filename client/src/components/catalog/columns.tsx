import { TickerData } from "@/types/ticker";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TickerData>[] = [
  {
    accessorKey: "ticker",
    header: "ticker",
  },
  {
    accessorKey: "exchange",
    header: "exchange",
  },
  {
    accessorKey: "price",
    header: "price",
  },
  {
    accessorKey: "change",
    header: "change",
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
