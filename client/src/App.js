import './App.css';
import { io } from 'socket.io-client';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions as sharesActions } from './store/shares';
import { actions as priceHistoryActions } from './store/priceHistory';
import { Home } from './pages/Home/Home';
import { Chosen } from './pages/Chosen/Chosen';
import { Loader } from './components/Loader/Loader';
import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

function App() {
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  const priceHistory = useSelector((state) => state.priceHistory)
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
      console.log('Connected to the server.');
      setTimeout(() => setLoaderIsVisible(false), 500);
    });

    socket.emit('start');

    socket.on('ticker', (data) => {
      const prices = data.map(ticker => (
        { 
          name: ticker.ticker,
          price: ticker.price,
        }));

      dispatch(priceHistoryActions.add(prices));
      dispatch(sharesActions.set(data));
      console.log('Received ticker data:', data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  console.log(priceHistory);

  return (
    <div className='app_container'>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />

        <Route path='/chosen' element={<Chosen />} />

        <Route path='/' element={<Navigate to='/home' />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>

      {loaderIsVisible && <Loader />}
    </div>
  );
}

export default App;
