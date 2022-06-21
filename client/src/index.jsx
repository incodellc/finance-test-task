import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import { store } from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
