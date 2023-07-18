import { createSlice } from "@reduxjs/toolkit";

const tickerSlice = createSlice({
  name: "ticker",
  initialState: [],
  reducers: {
    tickersReceived: (state, action) => {
      return action.payload;
    },
  },
});

export const { tickersReceived } = tickerSlice.actions;
export default tickerSlice.reducer;
