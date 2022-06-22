import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PriceChange } from "../../../shared/PriceChange/PriceChange";

export const TickerChart = ({ data, success, price, change_percent }) => {
  return (
    <div>
      <div className="chartPrice">
        <div className="price">{`$${price}`}</div>
        <PriceChange change_percent={change_percent} success={success} />
      </div>{" "}
      <AreaChart
        width={750}
        height={270}
        margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#90b1ce" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#90b1ce" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="USD"
          stroke="#90b1ce"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};
