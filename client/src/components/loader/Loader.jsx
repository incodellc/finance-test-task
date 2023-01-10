import React from 'react'
import { useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import Placeholder from './Placeholder'
import s from '../../styles/dashboard/tickers.module.scss'

const Loader = () => {
   const { quotes } = useSelector(state => state.quotes)

   return (
      <ul className={s.loader}>
         {quotes.length === 0 ? (
            <li className="mx-auto">
               <Oval
                  color="#3B82F6"
                  secondaryColor="#2563EB"
                  strokeWidth={3.3}
                  height={100}
                  width={100}
               />
            </li>
         ) : (
            quotes.map((_, i) => <Placeholder key={i} />)
         )}
      </ul>
   )
}

export default Loader
