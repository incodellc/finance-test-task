import { 
  addTickerAction,
  deleteTickerAction,
  loadTickersAction 
} from './actions';

const newState = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: 279.29,
    change: 64.52,
    change_percent: 0.84,
    dividend: 0.56,
    yield: 1.34,
    last_trade_time: '2021-04-30T11:53:21.000Z',
 };

describe('>> Tickers Actions test', ()=>{

    it('addTickerAction must add the object', () => {
        const addTicker = addTickerAction(newState)
        expect(addTicker).toEqual({ type:"ADD_TICKER", payload: newState })
    });

    it('deleteTickerAction must delete the object', () => {
      const deleteTicker = deleteTickerAction(newState.ticker)
      expect(deleteTicker)
      .toEqual({ type:"DELETE_TICKER", payload: newState.ticker })
    });

    it('loadTickersAction shoud works whith ampty array', () => {
      const loadTickers = loadTickersAction([])
      expect(loadTickers)
      .toEqual({ type:"LOAD_TICKERS", payload: [] })
    });

    it('loadTickersAction shoud works whith array', () => {
      const loadTickers = loadTickersAction([newState])
      expect(loadTickers)
      .toEqual({ type:"LOAD_TICKERS", payload: [newState] })
    });
}); 