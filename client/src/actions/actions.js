export const LOAD_STOCK = '[LOAD] Load Stock';
export const ADD_TO_FAVORITE = '[ADD] Add to favorite';
export const REMOVE_FAVORITE = '[REMOVE] Remove favorite';

export const loadStock = (stock) => ({
  type: LOAD_STOCK,
  payload: { stock },
});

export const addToFavorite = (favoriteStock) => ({
  type: ADD_TO_FAVORITE,
  payload: { favoriteStock },
});

export const removeFavorite = (favoriteStock) => ({
  type: REMOVE_FAVORITE,
  payload: { favoriteStock },
});
