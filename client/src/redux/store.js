import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tickersReducer from "./slices/tickersSlices";
import chartReducer from "./slices/chartSlices";

const rootReducer = combineReducers({
  chart: chartReducer,
  tickers: tickersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
