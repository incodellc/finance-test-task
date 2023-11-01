import {
  LOAD_STOCK,
  ADD_TO_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/actions';

const initialState = {
  stock: [],
  favoriteStock: [],
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STOCK:
      if (state.stock.length) {
        const newStock = [...action.payload.stock];
        const oldStock = [...state.stock];
        const resultStock = newStock.map((stock) => {
          const matchedData = oldStock.find((el) => stock.ticker === el.ticker);
          const color =
            matchedData.price > stock.price
              ? 'rgb(165,14,14)'
              : 'rgb(19,115,51)';
          return { ...stock, ...matchedData, color };
        });
        return { ...state, stock: [...resultStock] };
      } else {
        return {
          ...state,
          stock: [...action.payload.stock],
        };
      }
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteStock: [...state.favoriteStock, action.payload.favoriteStock],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteStock: [
          ...state.favoriteStock.filter(
            (stock) => stock.ticker !== action.payload.favoriteStock.ticker
          ),
        ],
      };
    default:
      return state;
  }
};
