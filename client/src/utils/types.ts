export type ChangeDirection = 'Up' | 'Down' | 'No Change';

export type Quote = {
  ticker: string,
  exchange: string,
  price: number,
  change: number,
  change_percent: number,
  dividend: number,
  yield: number,
  last_trade_time: Date,
  changeDirection?: ChangeDirection,
}
