import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SetIntervalBtn from '../components/menu/fetchInterval/SetIntervalBtn'

describe('click on interval button', () => {
   test('change interval on click', () => {
      const intervals = [6000, 10000, 14000, 20000]
      const state = {
         fetchInterval: 14000,
      }
      const setActive = jest.fn()
      intervals.forEach(el => {
         render(<SetIntervalBtn setActive={setActive} />)
      })
      expect(screen.getAllByTestId('intervalButton').length).toBe(
         intervals.length
      )
      userEvent.click(screen.getAllByTestId('intervalButton')[0])
      state.fetchInterval = 20000
      expect(state.fetchInterval).toBe(20000)
   })
})
