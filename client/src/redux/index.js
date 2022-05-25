import { createSlice, configureStore } from "@reduxjs/toolkit";

const stocksSlice = createSlice({
  name: "stocks",
  initialState: { stocks: [], loading: false },
  reducers: {
    updateStocks(state, action) {
      const data = action.payload;
      let stocks = data.map((stock, index) => {
        const formerPrice = state.stocks[index]?.price;
        return {
          ...stock,
          differance: formerPrice ? Math.floor(formerPrice - stock.price) : 0,
        };
      });
      state.stocks = stocks;
    },
    load(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { updateStocks, load } = stocksSlice.actions;
export const subscribeToTicker = (socket) => (dispatch, getState) => {
  dispatch(load(true));
  const stopLoading = () => {
    dispatch(load(false));
  };

  socket.on("ticker", (results) => {
    dispatch(updateStocks(results));
  });
  socket.on("connect", stopLoading);
  socket.on("disconnect", stopLoading);
  socket.emit("start");
};

export const reconnectToTicker = (socket) => (dispatch, getState) => {
  dispatch(load(true));
  socket.connect();
  socket.emit("start");
};

export const unSubscribeToTicker = (socket) => (dispatch, getState) => {
  dispatch(load(true));
  socket.disconnect();
};

export default configureStore({
  reducer: {
    stocks: stocksSlice.reducer,
  },
});
