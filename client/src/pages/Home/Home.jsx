import { TickerList } from '../../components/TickerList/TickerList';
import { useSelector } from 'react-redux';
import './Home.css';
import { Typography } from '@mui/material';


export const Home = () => {
  const shares = useSelector((state) => state.shares);

  return (
    <div className='home_container'>
      <Typography variant='h4'>Home page</Typography>
      <TickerList shares={shares} />
    </div>
  );
};
