import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectToSocket, disconnectFromSocket } from './actions/syncActions'
import s from './styles/app.module.scss'
import Dashboard from './pages/Dashboard'
import Assets from './pages/Assets'
import Menu from './components/menu/Menu'

function App() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { connected, fetchInterval } = useSelector(state => state.sync)

   const savedInterval =
      Number(localStorage.getItem('fetchInterval')) || fetchInterval

   useEffect(() => {
      navigate('/')
      if (!connected)
         setTimeout(() => dispatch(connectToSocket(savedInterval)), 565)

      return () => disconnectFromSocket()
   }, [])

   return (
      <div className={s.main}>
         <Menu />
         <div className="container mx-auto px-3 md:px-5">
            <Routes>
               <Route path="/" element={<Dashboard />} />
               <Route path="/assets-list" element={<Assets />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
