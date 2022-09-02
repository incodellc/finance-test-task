import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Ticker } from '../../Store/Slice/tickerSlice';

interface Props {
    ticker: Ticker | undefined,
    text: string
};

type CreateCard = (handleClick: () => void) => React.FC<Props>;

export const createCard: CreateCard = (handleClick) => {
    return ({ ticker, text }) => (
        <Card sx={{ minWidth: 275 }}>
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
            <Button 
                size="small"
                onClick={handleClick}
            >
                {text}
            </Button>
            </CardActions>
        </Card>
    );
};
