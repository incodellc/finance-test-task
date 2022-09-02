import { Box, Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from '../hooks/useAppSelector';
import { tickerState, Ticker } from "../Store/Slice/tickerSlice";
import { TickerCard } from "./TickerCard";

interface State {
    tickerSlice: tickerState
};

export const DisplayCards: React.FC = () => {
    const { tickers } = useAppSelector((state: State) => state.tickerSlice);
    
    return (
        // <Box
        //     height="100vh"
        //     display="flex"
        //     alignItems="center"
        //     justifyContent="center"
        // >
            <Grid 
                container
                spacing={2}
                maxWidth={900}
            >
                {tickers.map((ticker: Ticker) => (
                    <Grid item xs={4} key={ticker.ticker}>
                        <TickerCard ticker={ticker} />
                    </Grid>
                ))}
            </Grid>
        // </Box>
    );
};
