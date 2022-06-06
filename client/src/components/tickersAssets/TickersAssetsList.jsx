import TickerAssetItem from './tickerAssetItem/TickerAssetItem'
import { useSelector } from 'react-redux'
import s from '../../styles/tickersAssets/tickersAssetsList.module.scss'
import { useEffect, useRef, useState } from 'react'

const TickersAssetsList = () => {
   const { quotes } = useSelector(state => state.quotes)
   const [activeAssets, setActiveAssets] = useState([])
   const checkboxes = useRef([])
   checkboxes.current = []

   const newRef = el => {
      if (el && !checkboxes.current.includes(el)) {
         const tickerInfo = {
            isChecked: el.checked,
            ticker: el.dataset.ticker,
         }
         checkboxes.current.push(tickerInfo)
      }
   }

   const setCheckboxes = item => {
      checkboxes.current[item.id].isChecked = item.isChecked
      setActiveAssets(checkboxes.current)
   }

   useEffect(() => {
      localStorage.setItem('savedAssets', JSON.stringify(checkboxes.current))
   }, [activeAssets])

   return (
      <ul className={s.tickerAssetsList} data-testid="tickersAssetsList">
         {quotes.map((el, i) => (
            <TickerAssetItem
               key={el.ticker}
               index={i}
               assetItem={el}
               newRef={newRef}
               setter={setCheckboxes}
            />
         ))}
      </ul>
   )
}

export default TickersAssetsList
