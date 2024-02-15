/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Quote, Tickers } from "../../types/quote";

export interface QuoteState {
  quotes: Quote[];
  personalTickers: Tickers[];
}

const initialState: QuoteState = {
  quotes: [],
  personalTickers: [Tickers.GOOGL],
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    initQuotes: (state, action: PayloadAction<Quote[]>) => {
      state.quotes = action.payload;
    },
    addTicker: (state, action: PayloadAction<Tickers>) => {
      const isExistTicker = state.personalTickers.some(
        (ticker) => ticker === action.payload
      );

      if (isExistTicker) {
        return;
      }

      state.personalTickers = [...state.personalTickers, action.payload];
    },
    deleteTicker: (state, action: PayloadAction<Tickers>) => {
      state.personalTickers = state.personalTickers.filter(
        (ticker) => ticker !== action.payload
      );
    },
  },
});

export const { initQuotes, addTicker, deleteTicker } = quoteSlice.actions;
export default quoteSlice.reducer;
