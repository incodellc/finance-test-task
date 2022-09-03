import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Ticker } from '../../Store/Slice/tickerSlice';
import styled from '@emotion/styled';
import { colorIndicator } from './colorIndicator';

interface Props {
    ticker: Ticker | undefined,
    children: ReactNode
};

type CreateCard = (
    prevPrice: number,
    currentPrice: number,
    disabled: boolean
) => React.FC<Props>;

export const createCard: CreateCard = (
    prevPrice,
    currentPrice, 
    disabled
) => {
    const AnimatedCard = styled(Card)({
        animation: `${colorIndicator(prevPrice > currentPrice)} 0.6s ease-out`
    });

    const Wrapper = disabled || prevPrice === currentPrice ? Card : AnimatedCard;

    return ({ ticker, children }) => (
        <Wrapper  sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {ticker?.exchange}
                </Typography>
                <Typography variant="h5" component="div">
                    {ticker?.ticker}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {ticker?.price}
                </Typography>
                <Typography variant="body2">
                    {ticker?.change}
                    <br />
                    {ticker?.change_percent}
                </Typography>
            </CardContent>
            <CardActions>
                {children}
            </CardActions>
        </Wrapper>
    );
};
