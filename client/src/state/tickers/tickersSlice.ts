import { createSlice } from "@reduxjs/toolkit";

const tickersSlice = createSlice({
  name: "tickers",
  initialState: {
    tickers: new Array<string>(),
  },
  reducers: {
    addTicker: (state, action) => {
      state.tickers.push(action.payload);
    },

    removeTicker: (state, action) => {
      state.tickers = state.tickers.filter(
        (ticker) => ticker !== action.payload
      );
    },
  },
});

export const { addTicker, removeTicker } = tickersSlice.actions;
export default tickersSlice.reducer;
