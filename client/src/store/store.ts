import { configureStore } from '@reduxjs/toolkit';
import tickerSlice from './slice/tickerSlice';

export const store = configureStore({
    reducer: {
        tickerSlice
    }
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
