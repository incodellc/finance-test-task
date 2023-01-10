import { useSelector } from 'react-redux'
import s from '../../styles/dashboard/tickers.module.scss'
import TickerItem from './tickerItem/TickerItem'

const TickersList = () => {
   const { quotes } = useSelector(state => state.quotes)
   const savedAssets = JSON.parse(localStorage.getItem('savedAssets'))

   const renderSaved = () => {
      if (savedAssets.find(el => el.isChecked)) {
         return quotes.map((el, i) => {
            if (savedAssets[i].ticker === el.ticker && savedAssets[i].isChecked)
               return <TickerItem key={el.ticker} ticker={el} />
         })
      } else {
         return (
            <h3 className="text-center font-medium text-2xl">
               You don't have any asset
               <p className="text-base font-normal">
                  Please, choose the assets
               </p>
            </h3>
         )
      }
   }
   const renderAll = () => {
      return quotes.map(el => <TickerItem key={el.ticker} ticker={el} />)
   }

   return (
      <ul className={s.tickersList} data-testid="tickersList">
         {savedAssets && savedAssets.length !== 0 ? renderSaved() : renderAll()}
      </ul>
   )
}

export default TickersList
