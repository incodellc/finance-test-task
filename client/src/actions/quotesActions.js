import { GET_QUOTES } from './types'

export const getQuotes = quotes => dispatch => {
   dispatch({
      type: GET_QUOTES,
      payload: quotes,
   })
}
