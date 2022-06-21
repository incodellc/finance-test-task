import { 
  LOAD_TICKERS, 
  ADD_TICKER,
  DELETE_TICKER,
} from './actions';
import { createStore, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from "../react-app-env";

export const initialState: RootState = {
  tickersList: [],
  userTickersList: [],
};

export const rootReducer = (
  state = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case LOAD_TICKERS:
      return ({
        ...state,
        tickersList: action.payload,
      });
    case ADD_TICKER:
      return ({
        ...state,
        userTickersList: state.userTickersList.concat(action.payload),
      });
    case DELETE_TICKER:
      return ({
        ...state,
        userTickersList: state.userTickersList
          .filter(ticks => ticks.ticker !== action.payload),
      }); 
    
      default:
        return state;
    }
  };
  
export const store = createStore(
    rootReducer,
    composeWithDevTools(),
  );
  
  export default store;
  