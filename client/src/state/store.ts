import { configureStore } from "@reduxjs/toolkit";
import tickersReduser from "@/state/tickers/tickersSlice";

export const store = configureStore({
  reducer: {
    tickers: tickersReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
