import { useSelector } from 'react-redux'
import TickersList from '../components/tickers/TickersList'
import Loader from '../components/loader/Loader'
import s from '../styles/page.module.scss'

const Dashboard = () => {
   const { connected } = useSelector(state => state.sync)

   return (
      <div className={s.page} data-testid="dashboard">
         <h2 className={s.pageTitle}>Dashboard</h2>
         {connected ? <TickersList /> : <Loader />}
      </div>
   )
}

export default Dashboard
