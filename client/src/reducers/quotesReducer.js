import { GET_QUOTES } from '../actions/types'

const initialState = {
   quotes: [],
}

const quotesReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_QUOTES:
         return {
            ...state,
            quotes: action.payload,
         }
      default:
         return state
   }
}
export default quotesReducer
