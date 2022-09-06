import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Ticker {
    ticker: string,
    exchange: string,
    price: string,
    change: string,
    change_percent: string,
    dividend: string,
    yield: string,
    last_trade_time: Date
};

export interface TickerState {
    tickers: Ticker[]
};

const initialState: TickerState = {
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