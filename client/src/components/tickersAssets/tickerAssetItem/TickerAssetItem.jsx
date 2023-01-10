import { useState } from 'react'
import Switcher from './Switcher'
import s from '../../../styles/tickersAssets/tickersAssetsList.module.scss'

const TickerAssetItem = ({ index, assetItem, newRef, setter }) => {
   const savedAssets = JSON.parse(localStorage.getItem('savedAssets'))

   const isCheckedHandler = () => {
      if (savedAssets) {
         return savedAssets.find(
            el => el.ticker === assetItem.ticker && el.isChecked
         )
            ? true
            : false
      } else return true
   }

   const [isAssetChecked, setIsAssetChecked] = useState(isCheckedHandler)

   const switchAsset = e => {
      const changedItem = {
         isChecked: !isAssetChecked,
         ticker: e.target.dataset.ticker,
         id: index,
      }

      setIsAssetChecked(e.target.checked)
      setter(changedItem)
   }

   return (
      <li className={s.tickerAsset} data-testid="tickerAssetList">
         <h3 className={s.logo} data-logo={assetItem.ticker}>
            {assetItem.ticker}
         </h3>
         <Switcher
            type="checkbox"
            checked={isAssetChecked}
            data-ticker={assetItem.ticker}
            onChange={e => switchAsset(e)}
            ref={newRef}
         />
      </li>
   )
}

export default TickerAssetItem
