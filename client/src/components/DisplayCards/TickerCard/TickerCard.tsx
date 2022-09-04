import React, { useEffect, useRef } from 'react';
import { Ticker } from '../../../Store/Slice/tickerSlice';
import { useState } from 'react';
import { createCard } from './createCard';
import { 
	Button, 
	Card, 
	CardActions, 
	CardContent, 
	keyframes, 
	styled, 
	Typography
} from '@mui/material';
import { socket } from '../../../App';
import { SocketEvents } from '../../../socketEvents';
import { useActions } from '../../../hooks/useActions';

interface Props {
  	ticker: Ticker
};

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

export const TickerCard: React.FC<Props> = ({ ticker }) => {
	const prevState = useRef<Ticker>(ticker);
	const [staticTicker, setStaticTicker] = useState<Ticker>();
	const [disabled, setDisabled] = useState(false);
	const { setTickers } = useActions();

	useEffect(() => {
		prevState.current = ticker;
	});

	const handleDisable = () => {
		setStaticTicker(ticker);
		setDisabled(prev => !prev);
	};

	const handleRemove = () => {
        socket.emit(SocketEvents.CLEAR_INTERVAL);
		socket.emit(SocketEvents.REMOVE_TICKER, ticker.ticker);
		socket.emit(SocketEvents.START);
        socket.on(SocketEvents.TICKER, (data) => {
            setTickers(data);
        });
    };

	const AnimatedCard = styled(Card)({
        animation: `${colorIndicator(prevState.current.price > ticker.price)} 0.6s ease-out`
    });

	const Wrapper = disabled || prevState.current.price === ticker.price ? Card : AnimatedCard;
	const ProperTicker = disabled ? staticTicker : ticker

	return (
		<Wrapper  sx={{ width: 250 }}>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {ProperTicker?.exchange}
                </Typography>
                <Typography variant="h6" component="div">
                    {ProperTicker?.ticker}
                </Typography>
                <Typography variant="body2">
                    {ProperTicker?.price}
                    {` (${ProperTicker?.change_percent}%)`}
                </Typography>
            </CardContent>
            <CardActionsWrapper>
				<Button size="small" onClick={handleDisable}>
					{disabled ? 'Enable' : 'Disable'}
				</Button>
                <Button size="small" onClick={handleRemove}>
                    Remove
                </Button>
            </CardActionsWrapper>
        </Wrapper>
	);
};
// export const TickerCard: React.FC<Props> = ({ ticker }) => {
// 	const prevState = useRef<Ticker>(ticker);
// 	const [staticTicker, setStaticTicker] = useState<Ticker>();
// 	const [disabled, setDisabled] = useState(false);

// 	useEffect(() => {
// 		prevState.current = ticker;
// 	});

// 	const handleClick = () => {
// 		setStaticTicker(ticker);
// 		setDisabled(prev => !prev);
// 	};

// 	const CardWrapper = createCard(
// 		prevState.current.price,
// 		ticker.price,
// 		disabled
// 	);

// 	return disabled ? (
// 		<CardWrapper ticker={staticTicker}>
// 			<Button size="small" onClick={handleClick}>
// 				Enable
// 			</Button>
// 		</CardWrapper>
// 	) : (
// 		<CardWrapper ticker={ticker}>
// 			<Button size="small" onClick={handleClick}>
// 				Disable
// 			</Button>
// 		</CardWrapper>
// 	);
// };