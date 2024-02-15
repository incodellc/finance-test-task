import { configureStore } from "@reduxjs/toolkit";

import quoteReducer from "./slice/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
