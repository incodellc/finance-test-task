import s from '../../../styles/menu/fetchInterval.module.scss'
import useFormatToSeconds from '../../../hooks/useFormatToSeconds.js'

const SetIntervalBtn = ({ isDisabled, btnRef, fetchInterval, setActive }) => {
   return (
      <button
         ref={btnRef}
         className={`${s.intervalBtn} ${isDisabled ? s.disabled : ''}`}
         data-testid="intervalButton"
         data-btn
         data-interval={fetchInterval}
         onClick={e => setActive(e, fetchInterval)}
      >
         {useFormatToSeconds(fetchInterval)}
      </button>
   )
}
export default SetIntervalBtn
