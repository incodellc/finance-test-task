import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

import AddRemoveButton from './AddRemoveButton';

export default function TableWithTicker({ stock }) {
  return (
    <TableBody>
      {stock
        ? stock.map((row) => (
            <TableRow
              key={row.ticker}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell component='td' scope='row'>
                {row.ticker}
              </TableCell>
              <TableCell align='center'>{row.price}</TableCell>
              <TableCell sx={{ color: row.color }} align='center'>
                {row.change}
              </TableCell>
              <TableCell align='center'>
                <span
                  style={{
                    color: row.color,
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor:
                      row.color === 'rgb(165,14,14)'
                        ? 'rgb(252,232,230)'
                        : 'rgb(230,244,234)',
                  }}
                >
                  {row.color === 'rgb(165,14,14)' ? (
                    <SouthIcon sx={{ fontSize: '14px' }} />
                  ) : (
                    <NorthIcon sx={{ fontSize: '14px' }} />
                  )}
                  {row.change_percent}
                </span>
              </TableCell>
              <TableCell align='center'>
                <AddRemoveButton row={row} />
              </TableCell>
            </TableRow>
          ))
        : null}
    </TableBody>
  );
}
