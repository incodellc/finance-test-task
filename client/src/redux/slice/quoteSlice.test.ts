import { initQuotes, addTicker, deleteTicker, QuoteState } from "./quoteSlice";
import { Tickers } from "../../types/quote";
import quoteReducer from "./quoteSlice";

const mockQuotes = [
  {
    ticker: Tickers.AAPL,
    exchange: "130",
    price: "130",
    change: "130",
    change_percent: "130",
    dividend: "130",
    yield: "130",
    last_trade_time: new Date(),
  },
];

describe("quoteSlice", () => {
  it("should handle initQuotes", () => {
    const initialState: QuoteState = {
      quotes: [],
      personalTickers: [Tickers.GOOGL],
    };

    const nextState = quoteReducer(initialState, initQuotes(mockQuotes));

    expect(nextState.quotes).toEqual(mockQuotes);
  });

  it("should handle addTicker", () => {
    const initialState: QuoteState = {
      quotes: [],
      personalTickers: [Tickers.GOOGL],
    };

    const nextState = quoteReducer(initialState, addTicker(Tickers.AAPL));

    expect(nextState.personalTickers).toContain(Tickers.AAPL);
  });

  it("should handle deleteTicker", () => {
    const initialState: QuoteState = {
      quotes: [],
      personalTickers: [Tickers.GOOGL, Tickers.AAPL, Tickers.MSFT],
    };

    const nextState = quoteReducer(initialState, deleteTicker(Tickers.AAPL));

    expect(nextState.personalTickers).not.toContain(Tickers.AAPL);
  });
});
