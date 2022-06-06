import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import s from '../../../styles/menu/links.module.scss'

const Links = ({ setter }) => {
   const { pathname } = useLocation()
   const allLinks = useRef([])
   allLinks.current = []

   const setActive = e => {
      setter(false)
      allLinks.current.forEach(el => el.classList.remove(s.active))
      e.target.classList.add(s.active)
   }
   const newRef = el => {
      if (el && !allLinks.current.includes(el)) allLinks.current.push(el)
   }

   useEffect(() => {
      allLinks.current.forEach(el => {
         if (el.getAttribute('href') === '/') el.classList.add(s.active)
      })
   }, [allLinks])

   return (
      <div className={s.links} data-testid="links">
         <Link
            to={'/'}
            data-link
            data-testid="dashboardPageLink"
            ref={newRef}
            className={s.link}
            onClick={e => setActive(e)}
         >
            Dashboard
         </Link>
         <Link
            to={'/assets-list'}
            data-link
            data-testid="assetsPageLink"
            ref={newRef}
            className={s.link}
            onClick={e => setActive(e)}
         >
            Assets
         </Link>
      </div>
   )
}

export default Links
