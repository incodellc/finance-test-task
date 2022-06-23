import reducer, { setCurrentPrice } from "../redux/slices/tickersSlices";

const testState = [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: 279.29,
    change: 64.52,
    change_percent: 0.84,
    dividend: 0.56,
    yield: 1.34,
    last_trade_time: "2021-04-30T11:53:21.000Z",
  },
  {
    ticker: "GOOGL",
    exchange: "NASDAQ",
    price: 237.08,
    change: 154.38,
    change_percent: 0.1,
    dividend: 0.46,
    yield: 1.18,
    last_trade_time: "2021-04-30T11:53:21.000Z",
  },
  {
    ticker: "MSFT",
    exchange: "NASDAQ",
    price: 261.46,
    change: 161.45,
    change_percent: 0.41,
    dividend: 0.18,
    yield: 0.98,
    last_trade_time: "2021-04-30T11:53:21.000Z",
  },
  {
    ticker: "AMZN",
    exchange: "NASDAQ",
    price: 260.34,
    change: 128.71,
    change_percent: 0.6,
    dividend: 0.07,
    yield: 0.42,
    last_trade_time: "2021-04-30T11:53:21.000Z",
  },
  {
    ticker: "FB",
    exchange: "NASDAQ",
    price: 266.77,
    change: 171.92,
    change_percent: 0.75,
    dividend: 0.52,
    yield: 1.31,
    last_trade_time: "2021-04-30T11:53:21.000Z",
  },
  {
    ticker: "TSLA",
    exchange: "NASDAQ",
    price: 272.13,
    change: 158.76,
    change_percent: 0.1,
    dividend: 0.96,
    yield: 1.0,
    last_trade_time: "2021-04-30T11:53:21.000Z",
  },
];

test("should run the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    AAPL: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },

    GOOGL: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    MSFT: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    AMZN: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    FB: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    TSLA: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
  });
});

test("should handle adding to an 'empty' object", () => {
  const previousState = {
    AAPL: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },

    GOOGL: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    MSFT: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    AMZN: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    FB: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
    TSLA: {
      ticker: "",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
    },
  };
  expect(reducer(previousState, setCurrentPrice(testState))).toEqual({
    AAPL: {
      ticker: "AAPL",
      exchange: "NASDAQ",
      price: 279.29,
      change: 64.52,
      change_percent: 0.84,
      dividend: 0.56,
      yield: 1.34,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    GOOGL: {
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: 237.08,
      change: 154.38,
      change_percent: 0.1,
      dividend: 0.46,
      yield: 1.18,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    MSFT: {
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: 261.46,
      change: 161.45,
      change_percent: 0.41,
      dividend: 0.18,
      yield: 0.98,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    AMZN: {
      ticker: "AMZN",
      exchange: "NASDAQ",
      price: 260.34,
      change: 128.71,
      change_percent: 0.6,
      dividend: 0.07,
      yield: 0.42,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    FB: {
      ticker: "FB",
      exchange: "NASDAQ",
      price: 266.77,
      change: 171.92,
      change_percent: 0.75,
      dividend: 0.52,
      yield: 1.31,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    TSLA: {
      ticker: "TSLA",
      exchange: "NASDAQ",
      price: 272.13,
      change: 158.76,
      change_percent: 0.1,
      dividend: 0.96,
      yield: 1.0,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
  });
});

test("should handle adding to an existing object", () => {
  const previousState = {
    AAPL: {
      ticker: "AAPL",
      exchange: "NASDAQ",
      price: 300.29,
      change: 20.52,
      change_percent: 0.84,
      dividend: 0.56,
      yield: 1.34,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    GOOGL: {
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: 300.8,
      change: 140.38,
      change_percent: 0.1,
      dividend: 0.46,
      yield: 1.18,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    MSFT: {
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: 300.46,
      change: 80.45,
      change_percent: 0.41,
      dividend: 0.18,
      yield: 0.98,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    AMZN: {
      ticker: "AMZN",
      exchange: "NASDAQ",
      price: 300.34,
      change: 95.71,
      change_percent: 0.6,
      dividend: 0.07,
      yield: 0.42,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    FB: {
      ticker: "FB",
      exchange: "NASDAQ",
      price: 300.77,
      change: 63.92,
      change_percent: 0.75,
      dividend: 0.52,
      yield: 1.31,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    TSLA: {
      ticker: "TSLA",
      exchange: "NASDAQ",
      price: 300.13,
      change: 158.76,
      change_percent: 0.1,
      dividend: 0.96,
      yield: 1.0,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
  };
  expect(reducer(previousState, setCurrentPrice(testState))).toEqual({
    AAPL: {
      ticker: "AAPL",
      exchange: "NASDAQ",
      price: 279.29,
      change: 64.52,
      change_percent: 0.84,
      dividend: 0.56,
      yield: 1.34,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    GOOGL: {
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: 237.08,
      change: 154.38,
      change_percent: 0.1,
      dividend: 0.46,
      yield: 1.18,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    MSFT: {
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: 261.46,
      change: 161.45,
      change_percent: 0.41,
      dividend: 0.18,
      yield: 0.98,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    AMZN: {
      ticker: "AMZN",
      exchange: "NASDAQ",
      price: 260.34,
      change: 128.71,
      change_percent: 0.6,
      dividend: 0.07,
      yield: 0.42,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    FB: {
      ticker: "FB",
      exchange: "NASDAQ",
      price: 266.77,
      change: 171.92,
      change_percent: 0.75,
      dividend: 0.52,
      yield: 1.31,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    TSLA: {
      ticker: "TSLA",
      exchange: "NASDAQ",
      price: 272.13,
      change: 158.76,
      change_percent: 0.1,
      dividend: 0.96,
      yield: 1.0,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
  });
});
