import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import TickerAssetItem from '../components/tickersAssets/tickerAssetItem/TickerAssetItem'
import TickersAssetsList from '../components/tickersAssets/TickersAssetsList'
import store from '../store'
describe('is assets list on page', () => {
   test('render assets list', () => {
      render(
         <Provider store={store}>
            <TickersAssetsList />
         </Provider>
      )
      expect(screen.getByTestId('tickersAssetsList')).toBeInTheDocument()
   })
   test('render assets items', () => {
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
      quotes.forEach(el => {
         render(<TickerAssetItem assetItem={el} />)
      })
      expect(screen.getAllByTestId('tickerAssetList').length).toBe(4)
   })
})
