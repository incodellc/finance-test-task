import io from 'socket.io-client';
import { loadStock } from '../actions/actions';

const socket = io('http://localhost:4000');

export const fetchTickers = () => {
  return async (dispatch) => {
    socket.emit('start');
    socket.on('ticker', (data) => dispatch(loadStock(data)));
  };
};
