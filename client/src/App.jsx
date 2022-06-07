import React from 'react';
import { TickersList } from './components/TickersList';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import './App.scss';

const App = () => (
  <section className="App">
      <nav>
      <Link
        to="/"
        className="App__link"
      >
        Home
      </Link>
      <Link
        to="/TichersPage"
        className="App__link"
      >
        Trending Tickers
      </Link>
    </nav>

    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="TichersPage"
        element={<TickersList />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </section>
  
)

export default App;
