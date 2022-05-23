import { createSlice, configureStore } from "@reduxjs/toolkit";

const stocksSlice = createSlice({
  name: "stocks",
  initialState: { stocks: [], loading: false },
  reducers: {
    updateStocks(state, action) {
      state.stocks = action.payload;
      state.loading = false;
    },
    loading(state, action) {
      state.loading = true;
    },
  },
});
export const { updateStocks, loading, fullfilled } = stocksSlice.actions;
export const subscribeToTicker = (socket) => (dispatch, getState) => {
  dispatch(loading());
  socket.on("ticker", (results) => {
    dispatch(updateStocks(results));
  });
  socket.emit("start");
};

export default configureStore({
  reducer: {
    stocks: stocksSlice.reducer,
  },
});
