import { reducer as priceHistoryReducer } from "./priceHistory";
import { reducer as chosenSharesReducer } from "./chosenShares";
import { reducer as sharesReducer } from "./shares";
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  chosenShares: chosenSharesReducer,
  priceHistory: priceHistoryReducer,
  shares: sharesReducer,
});

export const store = configureStore({
  reducer: rootReducer
});