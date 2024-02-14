import { TickerData } from "@/types/ticker";
import { createSlice } from "@reduxjs/toolkit";

const tickersSlice = createSlice({
  name: "tickers",
  initialState: {
    tickers: new Array<TickerData>(),
    hideTickers: new Array<TickerData>(),
  },
  reducers: {
    addTicker: (state, action) => {
      state.tickers.push(action.payload);
    },

    removeTicker: (state, action) => {
      state.tickers = state.tickers.filter(
        (ticker) => ticker.ticker !== action.payload.ticker
      );
    },

    hideTicker: (state, action) => {
      state.hideTickers.push(action.payload);
    },

    showTicker: (state, action) => {
      state.hideTickers = state.hideTickers.filter(
        (ticker) => ticker.ticker !== action.payload.ticker
      );
    },
  },
});

export const { addTicker, removeTicker, hideTicker, showTicker } =
  tickersSlice.actions;
export default tickersSlice.reducer;
