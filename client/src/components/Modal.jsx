import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';

import { useSelector } from 'react-redux';
import TableWithTicker from '../assets/TableWithTicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FavoriteModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { favoriteStock } = useSelector((store) => store.stockReducer);

  return (
    <div className='buttonContainer'>
      <Badge
        badgeContent={favoriteStock.length}
        color='success'
        showZero={true}
      >
        <Button
          variant='outlined'
          sx={{ color: 'grey', border: '1px solid grey' }}
          onClick={handleOpen}
        >
          Favorite tickers
        </Button>
      </Badge>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {favoriteStock.length ? (
              <TableWithTicker stock={favoriteStock} />
            ) : (
              'No favorite tickers added'
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
