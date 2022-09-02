import React, { useEffect, useRef } from 'react';
import { Ticker } from '../../Store/Slice/tickerSlice';
import { useState } from 'react';
import { createCard } from './createCard';

interface Props {
  	ticker: Ticker
};

export const TickerCard: React.FC<Props> = ({ ticker }) => {
  const prevState = useRef<Ticker>(ticker);
  const [staticTicker, setStaticTicker] = useState<Ticker>();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
	// if (prevState.current.price >= ticker.price) {
	// 		console.log('gains');
	// } else {
	//   	console.log('losses'); 
	// }
	prevState.current = ticker;
  });

  const handleClick = () => {
	setStaticTicker(ticker);
	setDisabled(prev => !prev);
  };

  const CardWrapper = createCard(handleClick);

  return disabled ? (
	<CardWrapper ticker={staticTicker} text={'Enable'} />
  ) : (
	<CardWrapper ticker={ticker} text={'Disable'} />
  );
};