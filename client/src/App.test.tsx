import React, { ReactNode } from 'react';
import { 
  render,
  screen
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { setTickers } from './store/slice/actions';
import { SocketEvents } from './socketEvents';
import io from "socket.io-client";

const tickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getQuotes() {
  return tickers.map(ticker => ({
    ticker,
    exchange: 'NASDAQ',
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));
}

export const renderReduxComponent = (component: ReactNode) => render(
  <Provider store={store}>
      {component}
  </Provider>
);

export const regEx = (regEx: string) => new RegExp(regEx, 'i');

jest.mock("socket.io-client", () => {
  const emit = jest.fn();
  const on = jest.fn();
  const socket = { emit, on };
  return jest.fn(() => socket);
});

it('Does not show tickers initially', () => {
  renderReduxComponent(<App />);
  // store.dispatch(setTickers(getQuotes()));
  const cards = screen.queryAllByText(regEx('nasdaq'));
  expect(cards.length).toBe(0);
});
it('Can show tickers', () => {
  renderReduxComponent(<App />);
  store.dispatch(setTickers(getQuotes()));
  const cards = screen.getAllByText(regEx('nasdaq'));
  expect(cards.length).toBe(6);
});
it('Establishes the connection', () => {
  renderReduxComponent(<App />);
  expect(io).toHaveBeenCalledWith('http://localhost:4000');
});
// it('Awaits for tickers', () => {
//   renderReduxComponent(<App />);
//   expect(socket.on).toHaveBeenCalledWith(SocketEvents.TICKER, jest.fn());
// });