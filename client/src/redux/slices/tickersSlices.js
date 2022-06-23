import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  AAPL: {
    ticker: "",
    exchange: "NASDAQ",
    price: "",
    change: "",
    change_percent: "",
    dividend: "",
    yield: "",
    last_trade_time: Date(),
  },

  GOOGL: {
    ticker: "",
    exchange: "NASDAQ",
    price: "",
    change: "",
    change_percent: "",
    dividend: "",
    yield: "",
    last_trade_time: Date(),
  },
  MSFT: {
    ticker: "",
    exchange: "NASDAQ",
    price: "",
    change: "",
    change_percent: "",
    dividend: "",
    yield: "",
    last_trade_time: Date(),
  },
  AMZN: {
    ticker: "",
    exchange: "NASDAQ",
    price: "",
    change: "",
    change_percent: "",
    dividend: "",
    yield: "",
    last_trade_time: Date(),
  },
  FB: {
    ticker: "",
    exchange: "NASDAQ",
    price: "",
    change: "",
    change_percent: "",
    dividend: "",
    yield: "",
    last_trade_time: Date(),
  },
  TSLA: {
    ticker: "",
    exchange: "NASDAQ",
    price: "",
    change: "",
    change_percent: "",
    dividend: "",
    yield: "",
    last_trade_time: Date(),
  },
};
export const setCurrentPrice = createAsyncThunk(
  "tickers/setCurrentPrice",
  async (tickers) => {
    let tickersData = { ...initialState };
    tickers.forEach((el) => {
      tickersData[el.ticker] = { ...el };
    });
    return tickersData;
  }
);

export const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentPrice.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(setCurrentPrice.rejected, (state, { error }) => {
      console.log(error);
    });
  },
});
export default tickersSlice.reducer;
