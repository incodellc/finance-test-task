import { useEffect } from 'react';
// import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { loadStock } from '../actions/actions';
import { fetchTickers } from '../thunk/tickers';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableWithTicker from '../assets/TableWithTicker';

export default function Stock() {
  const dispatch = useDispatch();
  const { stock } = useSelector((store) => store.stockReducer);

  // const socket = io('http://localhost:4000');
  // socket.emit('start');
  useEffect(() => {
    // socket.on('ticker', (data) => {
    dispatch(fetchTickers());
    // });
  }, [dispatch]);

  return (
    <div className='tableContainer'>
      <TableContainer align='center' sx={{ maxWidth: 650 }} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell variant='head' align='center'>
                Ticker Name
              </TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Price Change ($)</TableCell>
              <TableCell align='center'>Price Change (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableWithTicker stock={stock} />
        </Table>
      </TableContainer>
    </div>
  );
}
