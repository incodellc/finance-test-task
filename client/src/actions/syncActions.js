import { CONNECT, DISCONNECT } from './types'
import io from 'socket.io-client'
import { getQuotes } from './quotesActions'
const socket = io.connect('https://finance-tickers.netlify.app')

export const connectToSocket = fetchInterval => dispatch => {
   socket.connect()
   socket.emit('start', fetchInterval)

   socket.on('ticker', quotes => {
      dispatch({
         type: CONNECT,
         payload: fetchInterval,
      })
      dispatch(getQuotes(quotes))
   })
}
export const disconnectFromSocket = () => dispatch => {
   socket.disconnect()
   dispatch({ type: DISCONNECT })
}
export const refreshInterval = interval => dispatch => {
   dispatch(disconnectFromSocket())
   setTimeout(() => dispatch(connectToSocket(interval)), 530)
}
