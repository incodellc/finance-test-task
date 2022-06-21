import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tickers } from '../../react-app-env';
import { getTickersSelector, getUserTickersSelector }
  from '../../store/selectors';
import { loadTickersAction, addTickerAction } from '../../store/actions';
import { socket } from '../../socket/socket';
import classNames from 'classnames';
import { TickerRow } from '../TickerRow';
import './TickersList.scss';

export const TickersList: React.FC = () => {
  const dispatch = useDispatch();
  const tickersList: Tickers[] = useSelector(getTickersSelector);
  const selectedTickers: Tickers[] = useSelector(getUserTickersSelector);
  const tickersListToRender: Tickers[] = tickersList
    .filter((ticker: Tickers) => selectedTickers
    .some(tick => tick.ticker === ticker.ticker))
  
  useEffect(() => {
    socket.emit('start');
    socket.on(
      'ticker',
      (response: Tickers[]) => {
        dispatch(loadTickersAction(response));
      }
    );
    
    return () => {
      socket.close();
    }
  }, [dispatch])


  const addTicker = useCallback((ticker: Tickers) => {
    if (tickersListToRender.includes(ticker)) {
      return tickersListToRender;
    } else {
      dispatch(addTickerAction(ticker));
    }
  }, [dispatch])

  return (
    <>
      <ul className="TickersList__list">
      {tickersList.length > 0 ? (
        tickersList.map((ticker) => (
          <li
            className={classNames("TickersList__item",
            {
              "TickersList__item--selected":
              tickersListToRender.includes(ticker)
            })}
            onClick={() => addTicker(ticker)}
            key={ticker.ticker}
            {...ticker}
          >
            <span className={classNames(
              {
                "TickersList--AAPL":
                ticker.ticker === 'AAPL',
              },
              {
                "TickersList--GOOGL":
                ticker.ticker === 'GOOGL',
              },
              {
                "TickersList--MSFT":
                ticker.ticker === 'MSFT',
              },
              {
                "TickersList--AMZN":
                ticker.ticker === 'AMZN',
              },
              {
                "TickersList--FB":
                ticker.ticker === 'FB',
              },
              {
                "TickersList--TSLA":
                ticker.ticker === 'TSLA',
              }
            )}
            >{ticker.ticker}</span>
              <span>{ticker.price}$</span>
          </li>
        ))
      ) : (
        <span>Loading...</span>
      )}
      </ul>
      {selectedTickers.length > 0 ? (
        <table className="TickersList__table">
          <thead>
            <tr>
              <th className="TickersList__table-header" />
              <th className="TickersList__table-header">Symbol</th>
              <th className="
                TickersList__table-header 
                TickersList__table-header--none"
              >
                Exchange
              </th>
              <th className="TickersList__table-header">Price</th>
              <th className="TickersList__table-header">Change</th>
              <th className="
                TickersList__table-header
                TickersList__table-header--none"
              >
                % Change
              </th>
              <th className="
                TickersList__table-header
                TickersList__table-header--none"
              >
                Dividend
              </th>
              <th className="
                TickersList__table-header
                TickersList__table-header--none"
              >
                Last trade time
              </th>
              <th className="TickersList__table-header" />
            </tr>
          </thead>
   
          <tbody className="TickersList__table-body">
            {tickersListToRender
              .map((ticker) => (
              <TickerRow
                key={ticker.ticker}
                {...ticker}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="TickersList__message">
          Tickers are not selected. Please select a ticker...
        </p>
      )}
    </>
  );
};
