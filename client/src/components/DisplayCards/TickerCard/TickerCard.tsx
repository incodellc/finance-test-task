import React, { 
	useEffect,
	useRef,
	useState
} from 'react';
import { Ticker } from '../../../store/slice/tickerSlice';
import {
	Button, 
	Card, 
	CardActions, 
	CardContent, 
	styled, 
	Typography
} from '@mui/material';
import { useActions } from '../../../hooks/useActions';
import { colorIndicator, removeTicker } from './helperFunctions';
import { ChangeIndicator } from './ChangeIndicator';

interface Props {
  	ticker: Ticker
};

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
	const handleRemove = () => removeTicker(ticker.ticker, setTickers);

	const priceCondition = prevState.current.price > ticker.price;
	const AnimatedCard = styled(Card)({
        animation: `${colorIndicator(priceCondition)} 0.6s ease-out`
    });
	const Wrapper = disabled || prevState.current.price === ticker.price ? Card : AnimatedCard;
	const ProperTicker = disabled ? staticTicker : ticker;

	return ProperTicker ? (
		<Wrapper  sx={{ width: 250 }}>
            <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {ProperTicker.exchange}
                </Typography>
                <Typography 
					variant="h6" 
					component="div"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
                    {ProperTicker.ticker}
					<Typography>
						{priceCondition ? '-' : '+'}
						{ProperTicker.change}
					</Typography>
                </Typography>
                <Typography 
					variant="body2" 
					alignItems="center" 
					display="flex"
					justifyContent="space-between"
				>
                    {ProperTicker.price}
					<ChangeIndicator 
						condition={priceCondition} 
						change_percent={ProperTicker.change_percent}
					/>
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
	) : (
		<Typography>
			Waiting...
		</Typography>
	);
};
