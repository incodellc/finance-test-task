import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ticker {
    ticker: string,
    exchange: string,
    price: number,
    change: number,
    change_percent: number,
    dividend: number,
    yield: number,
    last_trade_time: string
};

export interface tickerState {
    tickers: Ticker[]
};

const initialState: tickerState = {
    tickers: []
};

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        setTickers: (
            state,
            action: PayloadAction<Ticker[]>
        ) => {
            state.tickers = action.payload
        }
    }
});

export default tickerSlice.reducer;