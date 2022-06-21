import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTickerAction } from '../../store/actions';
import { Tickers } from '../../react-app-env';
import { usePreviousPrice } from '../usePrevious';
import classNames from 'classnames';
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
  const dispatch = useDispatch();
  const deleteTicker = useCallback((ticker: string) => {
    dispatch(deleteTickerAction(ticker))
  }, [])
  const previousPrice = usePreviousPrice(price);

  return (
    <tr className={classNames("TickerRow ",
      {
        "TickerRow--AAPL":
        ticker === 'AAPL',
      },
      {
        "TickerRow--GOOGL":
        ticker === 'GOOGL',
      },
      {
        "TickerRow--MSFT":
        ticker === 'MSFT',
      },
      {
        "TickerRow--AMZN":
        ticker === 'AMZN',
      },
      {
        "TickerRow--FB":
        ticker === 'FB',
      },
      {
        "TickerRow--TSLA":
        ticker === 'TSLA',
      }
    )}
    >
      <td className="TickerRow__data TickerRow__data--column">{ticker}</td>
      <td className="TickerRow__data TickerRow__data--none">{exchange}</td>
      <td className={classNames(
        "TickerRow__data",
        "TickerRow__data--priceDown", 
        "TickerRow__data--currency",
        {
          "TickerRow__data--priceUp":
          previousPrice,
        }
      )}
      >
        {price}
      </td>
      <td className="TickerRow__data TickerRow__data--currency">{change}</td>
      <td className="TickerRow__data TickerRow__data--none">
        {change_percent}
      </td>
      <td className="TickerRow__data TickerRow__data--none">{dividend}</td>
      <td className="
        TickerRow__data
        TickerRow__data--size 
        TickerRow__data--none"
      >
        {last_trade_time}
      </td>
      <td>
        <button 
          type="button"
          onClick={() => deleteTicker(ticker)}
          className="TickerRow__button"
        >
          X
        </button> 
      </td>
    </tr>
  )
}
