import { useEffect, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { refreshInterval } from '../../../actions/syncActions'
import SetIntervalBtn from './SetIntervalBtn'
import s from '../../../styles/menu/fetchInterval.module.scss'

const FetchInterval = ({ setter }) => {
   const dispatch = useDispatch()
   const { fetchInterval } = useSelector(state => state.sync)
   const { quotes } = useSelector(state => state.quotes)

   const savedInterval =
      Number(localStorage.getItem('fetchInterval')) || fetchInterval

   const intervals = [6000, 10000, 14000, 20000]
   const allBtns = useRef([])
   allBtns.current = []

   const setInterval = fetchInterval => {
      dispatch(refreshInterval(fetchInterval))
      localStorage.setItem('fetchInterval', fetchInterval)
   }
   const newRef = el => {
      if (el && !allBtns.current.includes(el)) allBtns.current.push(el)
   }

   useEffect(() => {
      allBtns.current.forEach(el => {
         if (quotes && Number(el.dataset.interval) === savedInterval)
            el.classList.add(s.active)
      })
   }, [allBtns])
   useEffect(() => localStorage.setItem('fetchInterval', savedInterval), [])

   const setActive = (e, fetchInterval) => {
      if (!e.target.classList.contains(s.active)) {
         setter(false)
         setInterval(fetchInterval)
         allBtns.current.forEach(el => el.classList.remove(s.active))
         e.target.classList.add(s.active)
      }
   }
   return (
      <div className={s.intervalBtns} data-testid="intervalButtons">
         {intervals.map((interval, i) => (
            <SetIntervalBtn
               key={i}
               isDisabled={!quotes ? true : false}
               btnRef={newRef}
               fetchInterval={interval}
               setActive={setActive}
            />
         ))}
      </div>
   )
}

export default FetchInterval
