import { LOAD_TICKERS } from "./actions";
import { createStore, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from "../react-app-env";

const initialState: RootState = {
  tickersList: [],
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_TICKERS:
      return ({
        ...state,
        tickersList: action.tickersList,
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