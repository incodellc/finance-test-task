import React from 'react';
import { Tickers } from '../../react-app-env';
import './TickerRow.scss';

type Props = Tickers;

export const TickerRow: React.FC<Props> = ({ 
    ticker, 
    exchange,
    price, 
    change, 
    change_percent,
    dividend,
    last_trade_time
}) => {
  return (
    <tr className="TickerRow">
      <td className="TickerRow__data TickerRow__data--column">{ticker}</td>
      <td className="TickerRow__data">{exchange}</td>
      <td className="TickerRow__data TickerRow__data--currency">{price}</td>
      <td className="TickerRow__data TickerRow__data--currency">{change}</td>
      <td className="TickerRow__data">{change_percent}</td>
      <td className="TickerRow__data">{dividend}</td>
      <td className="TickerRow__data TickerRow__data--size">{last_trade_time}</td>
    </tr>
  )
}
