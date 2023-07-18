import { configureStore } from '@reduxjs/toolkit'
import tickersReducer from '../features/tickers-slice'


export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});
