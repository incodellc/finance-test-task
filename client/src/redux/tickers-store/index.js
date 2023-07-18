// import { io } from "socket.io-client";

// export function getTickers() {
//   const socket = io.connect("http://localhost:4000");

//   socket.emit("start");
//   socket.on("ticker", (response) =>  Array.isArray(response) ? response : [response]);
// }

import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const FETCH_TICKERS_REQUEST = 'FETCH_TICKERS_REQUEST';
const FETCH_TICKERS_SUCCESS = 'FETCH_TICKERS_SUCCESS';
const FETCH_TICKERS_FAILURE = 'FETCH_TICKERS_FAILURE';

const initialState = {
  tickers: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKERS_REQUEST:
      return {
        ...state,
        error: null
      };
    case FETCH_TICKERS_SUCCESS:
      return {
        ...state,
        tickers: action.payload
      };
    case FETCH_TICKERS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export const fetchTickers = createAsyncThunk('tickers/fetch', async () => {
  const socket = io.connect('http://localhost:4000');

  socket.emit('start');

  return new Promise((resolve, reject) => {
    socket.on('ticker', (response) => {
      const tickers = Array.isArray(response) ? response : [response];
      resolve(tickers);
    });

    socket.on('error', (error) => {
      reject(new Error(error));
    });
  });
});

export const store = configureStore({
  reducer
});
