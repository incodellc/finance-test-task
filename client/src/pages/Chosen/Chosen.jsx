import { Typography, Button } from '@mui/material';
import { TickerList } from '../../components/TickerList/TickerList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Chosen.css';

export const Chosen = () => {
  const shares = useSelector((state) => state.shares);
  const chosenShares = useSelector((state) => state.chosenShares);

  const sharesToShow = shares.filter((share) =>
    chosenShares.includes(share.ticker),
  );

  const isEmpty = sharesToShow.length === 0;

  return (
    <div className='chosen_container'>
      {isEmpty ? (
        <>
          <Typography variant='h3'>Nothing was chosen yet</Typography>
          <Link to='/home'>
            <Button sx={{ marginTop: '40px' }} variant='contained'>
              Back Home
            </Button>
          </Link>
        </>
      ) : (
        <TickerList shares={sharesToShow} />
      )}
    </div>
  );
};
