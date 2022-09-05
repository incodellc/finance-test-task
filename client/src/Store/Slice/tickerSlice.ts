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