import React from 'react'
import s from '../../../styles/dashboard/tickers.module.scss'

const TickerItem = ({ ticker }) => {
   const itemLogo = ticker.ticker

   const isDifference = (
      changedPrice = ticker.change,
      currentPrice = ticker.price
   ) => (changedPrice > currentPrice ? true : false)

   return (
      <li className={s.ticker} data-testid="tickerItem">
         <h3 className={s.logo} data-logo={itemLogo}>
            {ticker.ticker}
         </h3>
         <p className={s.price}>{ticker.price}$</p>
         <div className={s.tickerChanges}>
            <p className={`${s.percent} ${isDifference() ? s.up : s.down}`}>
               {isDifference() ? '+' : '-'}
               {ticker.change_percent}%
            </p>
            <p className={`${s.change} ${isDifference() ? s.up : s.down}`}>
               {isDifference() ? '+' : '-'}
               {ticker.change}$
            </p>
         </div>
      </li>
   )
}

export default TickerItem
