import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './App.scss';
import { CurrentDate } from './components/CurrentDate/CurrentDate';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Outlet />
        <CurrentDate />
      </div>

      <Footer />
    </div>
  );
}
