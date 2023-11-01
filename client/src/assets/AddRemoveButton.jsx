import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite, removeFavorite } from '../actions/actions';

export default function AddRemoveButton({ row }) {
  const { favoriteStock } = useSelector((store) => store.stockReducer);

  const dispatch = useDispatch();

  const handleFavorite = (stock) => {
    dispatch(addToFavorite(stock));
  };

  const handleRemoveFavorite = (stock) => {
    dispatch(removeFavorite(stock));
  };

  return favoriteStock.some((favorite) => favorite.ticker === row.ticker) ? (
    <RemoveCircleOutlineIcon
      onClick={() => handleRemoveFavorite(row)}
      sx={{ color: 'rgb(128,134,139)' }}
    />
  ) : (
    <AddCircleOutlineIcon
      onClick={() => handleFavorite(row)}
      sx={{ color: 'rgb(128,134,139)' }}
    />
  );
}
