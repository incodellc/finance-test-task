import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { actions as chosenSharesActions } from '../../store/chosenShares';

export const TickerItem = ({ share }) => {
  const chosenShares = useSelector((state) => state.chosenShares);
  const dispatch = useDispatch();

  const shareNames = {
    AAPL: 'Apple',
    GOOGL: 'Alphabet Inc.',
    MSFT: 'Microsoft',
    AMZN: 'Amazon.com',
    FB: 'Meta',
    TSLA: 'Tesla inc',
  };

  const isShareChosen = chosenShares.some((chosen) => chosen === share.ticker);

  return (
    <Box
      sx={{
        margin: '0 auto',
        marginTop: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 640,
        width: '100%',
        height: '60px',
        borderBottom: 1,
        borderRadius: 2,
        borderColor: 'lightgray',
        padding: '16px',
        '&:hover': {
          backgroundColor: '#eee',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box>
        <Box
          sx={{
            height: 22,
            width: 47,
            borderRadius: 1,
            backgroundColor: '#5865F2',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '22px',
          }}
        >
          {share.ticker}
        </Box>
        <Typography variant='caption' gutterBottom>
          {shareNames[share.ticker]}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h6'>{share.price}$</Typography>

        <Box
          sx={{
            marginLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            width: '70px',
            height: '32px',
            backgroundColor: '#C2E5D3',
            borderRadius: 2,
          }}
        >
          <ArrowUpwardIcon />
          <Typography variant='body2'>{share.change_percent}%</Typography>
        </Box>

        {isShareChosen ? (
          <CloseIcon
            onClick={() => dispatch(chosenSharesActions.remove(share.ticker))}
            sx={{
              marginLeft: '10px',
              '&:hover': {
                color: 'blue',
              },
            }}
          />
        ) : (
          <AddCircleOutlineOutlinedIcon
            onClick={() => dispatch(chosenSharesActions.add(share.ticker))}
            sx={{
              marginLeft: '10px',
              '&:hover': {
                color: 'blue',
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};
