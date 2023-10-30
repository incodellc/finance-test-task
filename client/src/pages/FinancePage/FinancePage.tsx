import React, { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import './FinancePage.scss';
import { Quote } from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTicker, removeTicker } from '../../redux/tickerReducer';

export const FinancePage = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [prevPrices, setPrevPrices] = useState<Record<string, {price: number}>>({});
  const tickers = useAppSelector(state => state.ticker.items);
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const handleTickerData = useCallback((data: Quote[]) => {
    const newPrevPrices: Record<string, {price: number}> = { ...prevPrices };

    data.forEach((quote: Quote) => {
      if (prevPrices[quote.ticker] !== undefined) {
        if (quote.price > prevPrices[quote.ticker].price) {
          quote.changeDirection = 'Up';
        } else if (quote.price < prevPrices[quote.ticker].price) {
          quote.changeDirection = 'Down';
        } else {
          quote.changeDirection = 'No Change';
        }
      }

      newPrevPrices[quote.ticker] = { price: quote.price };
    });

    setQuotes(data);
    setPrevPrices(newPrevPrices);
  }, [count]);

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('ticker', handleTickerData);
    socket.emit('start');

    return () => {
      socket.off('ticker', handleTickerData);
      socket.disconnect();
    };
  }, [handleTickerData]);

  const addToFavoritesHandler = (ticker: string) => {
    dispatch(addTicker(ticker));
  }

  const removeFromFavoritesHandler = (ticker: string) => {
    dispatch(removeTicker(ticker));
  }

  useEffect(() => {
    let timeId = setTimeout(() => {
      setCount(1);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    }
  }, []);

  return (
    <div className="finance">
      <h1>Finance page</h1>

      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>Change</th>
            <th>Percent</th>
            <th>Favorites</th>
          </tr>
        </thead>

        <tbody>
          {quotes.map((quote, i) => (
            <tr key={quote.ticker}>
              <td>{i + 1}</td>

              <td>{quote.ticker}</td>

              <td>{quote.price}</td>

              <td>
                {quote.changeDirection === 'Down' && (
                  <div className="p10 bg-danger">
                    <span className="text-bold">&#8595; </span>
                    {quote.change}%
                  </div>
                )}
                {quote.changeDirection === 'Up' && (
                  <div className="p10 bg-success">
                    <span className="text-bold">&#8593; </span>
                    {quote.change}%  
                  </div>
                )}
                {quote.changeDirection !== 'Down' && quote.changeDirection !== 'Up' && (
                  <div>{quote.change}</div>
                )}
              </td>

              <td>
                {quote.changeDirection === 'Down' && (
                  <div className="p10 bg-danger">
                    <span className="text-bold">&#8595; </span>
                    {quote.change_percent}%
                  </div>
                )}
                {quote.changeDirection === 'Up' && (
                  <div className="p10 bg-success">
                    <span className="text-bold">&#8593; </span>
                    {quote.change_percent}%  
                  </div>
                )}
                {quote.changeDirection !== 'Down' && quote.changeDirection !== 'Up' && (
                  <div>{quote.change_percent}%</div>
                )}
              </td>

              <td>
                {!tickers.includes(quote.ticker) ? (
                  <button
                    className="btn btn-success"
                    onClick={() => addToFavoritesHandler(quote.ticker)}
                  >Add</button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromFavoritesHandler(quote.ticker)}
                  >Remove</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
