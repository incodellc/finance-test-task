import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tickers } from '../../react-app-env';
import { getTickersSelector } from '../../store/selectors';
import { loadTickersAction } from '../../store/actions';
import { socket } from '../../socket/socket';
import { TickerRow } from '../TickerRow';
import './TickersList.scss';

export const TickersList: React.FC = () => {
  const dispatch = useDispatch();
  const tickersList = useSelector(getTickersSelector);
  
  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (response: Tickers[]) => dispatch(loadTickersAction(response)));
    
    return () => {
      socket.close();
    }
  }, [dispatch])

    return (
      <table className="TickersList">
      <thead>
        <tr>
        <th className="TickersList__table-header" />
          <th className="TickersList__table-header">Symbol</th>
          <th className="TickersList__table-header">Exchange</th>
          <th className="TickersList__table-header">Price</th>
          <th className="TickersList__table-header">Change</th>
          <th className="TickersList__table-header">% Change</th>
          <th className="TickersList__table-header">Dividend</th>
          <th className="TickersList__table-header">Last trade time</th>
        </tr>
      </thead>

      <tbody className="TickersList__table-body">
        {tickersList.map((ticker) => (
          <TickerRow
            key={ticker.ticker}
            {...ticker}
          />
        ))}
      </tbody>
    </table>
  );
};
