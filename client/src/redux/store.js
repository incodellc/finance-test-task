import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tickersReducer from "./slices/tickersSlices";
import chartReducer from "./slices/chartSlices";

const rootReducer = combineReducers({
  chart: chartReducer,
  tickers: tickersReducer,
});

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage({ chart: store.getState().chart }));
