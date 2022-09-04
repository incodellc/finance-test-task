import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Ticker } from '../../../Store/Slice/tickerSlice';
import styled from '@emotion/styled';
import { keyframes } from "@emotion/react";
import { Button } from '@mui/material';
import { socket } from '../../../App';
import { SocketEvents } from '../../../socketEvents';

interface Props {
    ticker: Ticker | undefined,
    children: ReactNode
};

type CreateCard = (
    prevPrice: number,
    currentPrice: number,
    disabled: boolean
) => React.FC<Props>;



const colorIndicator = (condition: boolean) => keyframes`
    0% {
        background-color: ${condition ? 'red' : 'green'}
    }
    100% {
        background-color: white
    }
`;

const CardActionsWrapper = styled(CardActions)({
    justifyContent: 'space-between'
});

export const createCard: CreateCard = (
    prevPrice,
    currentPrice, 
    disabled
) => {
    const AnimatedCard = styled(Card)({
        animation: `${colorIndicator(prevPrice > currentPrice)} 0.6s ease-out`
    });

    const Wrapper = disabled || prevPrice === currentPrice ? Card : AnimatedCard;

    const handleClick = () => {
        socket.emit(SocketEvents.CLEAR_INTERVAL);


        socket.on(SocketEvents.TICKER, (data) => {
            // setTickers(data);
        });
    };

    return ({ ticker, children }) => (
        <Wrapper  sx={{ width: 250 }}>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {ticker?.exchange}
                </Typography>
                <Typography variant="h6" component="div">
                    {ticker?.ticker}
                </Typography>
                <Typography variant="body2">
                    {ticker?.price}
                    {` (${ticker?.change_percent}%)`}
                </Typography>
            </CardContent>
            <CardActionsWrapper>
                {children}
                <Button size="small" onClick={() => {}}>
                    Remove
                </Button>
            </CardActionsWrapper>
        </Wrapper>
    );
};
