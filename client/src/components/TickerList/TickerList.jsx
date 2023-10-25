import { Box, Typography } from '@mui/material';
import { TickerItem } from '../TickerItem/tickerItem';

export const TickerList = ({ shares }) => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        border: 1,
        borderColor: 'lightgray',
        borderRadius: 2,
        maxWidth: 700,
      }}
    >
      {shares.map((share) => (
        <TickerItem key={share.ticker} share={share} />
      ))}
    </Box>
  );
};
