import React from 'react'
import { useLocation } from 'react-router-dom'
import s from '../../styles/dashboard/tickers.module.scss'

const Placeholder = () => {
   const { pathname } = useLocation()

   return (
      <li className={s.placeholder}>
         <p className={s.logoPlaceholder}></p>
         {pathname === '/' ? (
            <>
               <p className={s.pricePlaceholder}></p>
               <div className={s.tickerChangesPlaceholder}>
                  <p className={s.percentPlaceholder}></p>
                  <p className={s.changePlaceholder}></p>
               </div>
            </>
         ) : (
            ''
         )}
      </li>
   )
}

export default Placeholder
