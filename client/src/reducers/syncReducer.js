import { CONNECT, DISCONNECT } from '../actions/types'

const initialState = {
   connected: false,
   fetchInterval: 14000,
}

const syncReducer = (state = initialState, action) => {
   switch (action.type) {
      case CONNECT:
         return {
            ...state,
            connected: true,
            fetchInterval: action.payload,
         }
      case DISCONNECT:
         return { ...state, connected: false, fetchInterval: 0 }
      default:
         return state
   }
}
export default syncReducer
