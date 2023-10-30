const ADD_TICKER = 'ADD_TICKER';
const REMOVE_TICKER = 'REMOVE_TICKER';
const REMOVE_ALL = 'REMOVE_ALL';

const initialState: InitialState = {
  items: []
}

type InitialState = {
  items: string[],
};

const tickerReducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case ADD_TICKER:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case REMOVE_TICKER:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };

    case REMOVE_ALL:
      return {
        ...state,
        items: []
      };
  
    default:
      return state;
  }
}

//action creators
export const addTicker = (ticker: string): AddTicker => {
  return {
    type: ADD_TICKER,
    payload: ticker,
  }
}

export const removeTicker = (ticker: string): RemoveTicker => {
  return {
    type: REMOVE_TICKER,
    payload: ticker,
  }
}

export const removeAll = (): RemoveAll => {
  return {
    type: REMOVE_ALL,
  }
}

type AddTicker = {
  type: typeof ADD_TICKER,
  payload: string,
}

type RemoveTicker = {
  type: typeof REMOVE_TICKER,
  payload: string,
}

type RemoveAll= {
  type: typeof REMOVE_ALL,
}

type ActionTypes =
  | AddTicker
  | RemoveTicker
  | RemoveAll;

export default tickerReducer;
