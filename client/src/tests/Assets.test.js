import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'
import Assets from '../pages/Assets'
describe('is assets on page', () => {
   test('render assets', () => {
      render(
         <Provider store={store}>
            <Assets />
         </Provider>
      )
      expect(screen.getByTestId('assets')).toBeInTheDocument()
   })
})
