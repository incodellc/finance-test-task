import React, { useEffect, useRef } from 'react';
import { Ticker } from '../../Store/Slice/tickerSlice';
import { useState } from 'react';
import { createCard } from './createCard';
import { Button } from '@mui/material';

interface Props {
  	ticker: Ticker
};

export const TickerCard: React.FC<Props> = ({ ticker }) => {
	const prevState = useRef<Ticker>(ticker);
	const [staticTicker, setStaticTicker] = useState<Ticker>();
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		prevState.current = ticker;
	});

	const handleClick = () => {
		setStaticTicker(ticker);
		setDisabled(prev => !prev);
	};

	const CardWrapper = createCard(
		prevState.current.price,
		ticker.price,
		disabled
	);

	return disabled ? (
		<CardWrapper ticker={staticTicker}>
			<Button size="small" onClick={handleClick}>
				Enable
			</Button>
		</CardWrapper>
	) : (
		<CardWrapper ticker={ticker}>
			<Button size="small" onClick={handleClick}>
				Disable
			</Button>
		</CardWrapper>
	);
};