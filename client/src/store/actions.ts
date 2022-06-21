import { 
  deleteTickerActionType,
  addTickerActionType,
  loadTickersActionType,
  Tickers }
from '../react-app-env';

export const LOAD_TICKERS = 'LOAD_TICKERS';
export const ADD_TICKER = 'ADD_TICKER';
export const DELETE_TICKER = 'DELETE_TICKER';

export const loadTickersAction = (
  payload: Tickers[]
): loadTickersActionType => ({
  type: LOAD_TICKERS,
  payload,
});

export const addTickerAction = (
  payload: Tickers
): addTickerActionType => ({
  type: ADD_TICKER,
  payload,
});

export const deleteTickerAction = (
  payload: string
): deleteTickerActionType => ({
  type: DELETE_TICKER,
  payload,
});
