import { getDate } from "./dateHelper";
import { getName } from "./getName";

export const getValue = (field, value, success) => {
  if (field === "ticker") return getName(value);
  if (field === "exchange") return value;
  if (field === "price") return `$${value}`;
  if (field === "change") return `${success ? "+" : "-"}$${value}`;
  if (field === "change_percent") return `${value}%`;
  if (field === "dividend") return value;
  if (field === "yield") return value;
  if (field === "last_trade_time") return getDate(new Date(value).toString());
};
