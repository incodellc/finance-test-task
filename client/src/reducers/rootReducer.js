import { combineReducers } from 'redux'
import syncReducer from './syncReducer'
import quotesReducer from './quotesReducer'

export default combineReducers({
   sync: syncReducer,
   quotes: quotesReducer,
})
