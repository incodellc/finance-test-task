import { createSlice } from "@reduxjs/toolkit";
import { getTime } from "../../utils/dateHelper";

const initialState = {
  AAPL: [
    {
      USD: 279.29,
      time: getTime(new Date()),
      success: true,
    },
  ],

  GOOGL: [
    {
      USD: 237.08,
      time: getTime(new Date()),
      success: true,
    },
  ],
  MSFT: [
    {
      USD: 261.46,
      time: getTime(new Date()),
      success: true,
    },
  ],
  AMZN: [
    {
      USD: 260.34,
      time: getTime(new Date()),
      success: true,
    },
  ],
  FB: [
    {
      USD: 266.77,
      time: getTime(new Date()),
      success: true,
    },
  ],
  TSLA: [
    {
      USD: 272.13,
      time: getTime(new Date()),
      success: true,
    },
  ],
};

export const chartSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setData: (state, action) => {
      let tickersData = { ...state };
      if ([...tickersData.AAPL].length > 50) tickersData = { ...initialState };

      action.payload.forEach((el) => {
        let ticker = [...tickersData[el.ticker]];
        const data = {
          USD: el.price,
          time: getTime(new Date(el.last_trade_time)),
          success: el.price > ticker[ticker.length - 1].USD,
        };

        ticker = [...ticker, data];
        tickersData[el.ticker] = [...ticker];
      });

      return tickersData;
    },
  },
});
export const { setData } = chartSlice.actions;
export default chartSlice.reducer;
