import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import TickerItem from '../components/tickers/tickerItem/TickerItem'
import TickersList from '../components/tickers/TickersList'
import store from '../store'

describe('tickers list on page', () => {
   test('render tickers list', () => {
      render(
         <Provider store={store}>
            <TickersList />
         </Provider>
      )
      const quotes = [
         {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: 164.3,
            change: 114.2,
            change_percent: 2.1,
            dividend: 0.4,
            yield: 1,
         },
         {
            ticker: 'GOOGL',
            exchange: 'NASDAQ',
            price: 164.3,
            change: 114.2,
            change_percent: 2.1,
            dividend: 0.4,
            yield: 1,
         },
         {
            ticker: 'TSLA',
            exchange: 'NASDAQ',
            price: 164.3,
            change: 114.2,
            change_percent: 2.1,
            dividend: 0.4,
            yield: 1,
         },
         {
            ticker: 'MSFT',
            exchange: 'NASDAQ',
            price: 164.3,
            change: 114.2,
            change_percent: 2.1,
            dividend: 0.4,
            yield: 1,
         },
      ]

      let savedAssets = []
      expect(screen.getByTestId('tickersList')).toBeInTheDocument()
      if (savedAssets.length === 0) {
         quotes.forEach(el => {
            render(<TickerItem key={el.ticker} ticker={el} />)
         })
         expect(screen.getAllByTestId('tickerItem').length).toBe(4)
      } else {
         savedAssets = [
            { ticker: 'AAPL', isChecked: true },
            { ticker: 'GOOGL', isChecked: false },
         ]
         savedAssets.forEach(el => {
            render(<TickerItem key={el.ticker} ticker={el} />)
         })
         expect(screen.getAllByTestId('tickerItem').length).toBe(2)
      }
   })
})
