import { screen } from '@testing-library/react'
import { renderApp } from './helpers/renderApp'
import SocketMock from 'socket.io-mock'

describe('app start', () => {
   test('connect to server', () => {
      const state = {
         connected: false,
         fetchInterval: 14000,
      }
      const socket = new SocketMock()

      socket.on('start', interval => {
         state.connected = true
         state.fetchInterval = interval

         expect(state.connected).toEqual(true)
         expect(state.fetchInterval).toEqual(interval)
      })
      socket.socketClient.emit('start', state.fetchInterval)
   })

   test('is dashboard on page', () => {
      renderApp()
      expect(screen.getByTestId('dashboard')).toBeInTheDocument()
   })
   test('is menu on page', () => {
      renderApp()
      expect(screen.getByTestId('menu')).toBeInTheDocument()
   })
})
