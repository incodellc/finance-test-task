import { forwardRef } from 'react'
import s from '../../../styles/tickersAssets/tickersAssetsList.module.scss'

const Switcher = forwardRef((props, ref) => {
   return (
      <label>
         <input {...props} ref={ref} />
         <span className={s.switch}></span>
      </label>
   )
})

export default Switcher
