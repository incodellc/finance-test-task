import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FetchInterval from './fetchInterval/FetchInterval'
import s from '../../styles/menu/menu.module.scss'
import Links from './links/Links'
import Burger from './Burger'

const Menu = () => {
   const [isMenuActive, setIsMenuActive] = useState(false)
   const [isShown, setIsShown] = useState(true)
   const { pathname } = useLocation()

   useEffect(() => {
      pathname === '/assets-list' ? setIsShown(false) : setIsShown(true)
   }, [pathname])

   return (
      <aside className={s.aside} data-testid="menu">
         <div className={s.logo}>
            <img src="/favicon.ico" alt="T" width={32} />
            <h1 className={s.logoTitle}>Tickers</h1>
         </div>
         <Burger isActive={isMenuActive} setter={setIsMenuActive} />
         <div className={`${s.menu} ${isMenuActive ? s.active : ''}`}>
            <Links setter={setIsMenuActive} />
            {isShown ? <FetchInterval setter={setIsMenuActive} /> : ''}
         </div>
      </aside>
   )
}

export default Menu
