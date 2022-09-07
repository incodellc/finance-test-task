import { Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from '../../hooks/useAppSelector';
import { TickerState, Ticker } from "../../store/slice/tickerSlice";
import { TickerCard } from "./TickerCard/TickerCard";

interface State {
    tickerSlice: TickerState
};

export const DisplayCards: React.FC = () => {
    const { tickers } = useAppSelector((state: State) => state.tickerSlice);
    
    return (
        <Grid 
            container
            spacing={2}
        >
            {tickers.map((ticker: Ticker) => (
                <Grid item xs={4} key={ticker.ticker}>
                    <TickerCard ticker={ticker} />
                </Grid>
            ))}
        </Grid>
    );
};
