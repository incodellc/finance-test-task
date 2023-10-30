import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { FinancePage } from './pages/FinancePage/FinancePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<FinancePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
