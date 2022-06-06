import { useSelector } from 'react-redux'
import Loader from '../components/loader/Loader'
import TickersAssetsList from '../components/tickersAssets/TickersAssetsList'
import s from '../styles/page.module.scss'

const Assets = () => {
   const { connected } = useSelector(state => state.sync)

   return (
      <div className={s.page} data-testid="assets">
         <h2 className={s.pageTitle}>Assets</h2>
         {connected ? <TickersAssetsList /> : <Loader />}
      </div>
   )
}

export default Assets
