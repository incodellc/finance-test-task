import reducer, { setData } from "../redux/slices/charSlices";

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
    AAPL: [
      {
        USD: 279.29,
        time: getTime(new Date()),
        success: true,
      },
    ],

    GOOGL: [
      {
        USD: 237.08,
        time: getTime(new Date()),
        success: true,
      },
    ],
    MSFT: [
      {
        USD: 261.46,
        time: getTime(new Date()),
        success: true,
      },
    ],
    AMZN: [
      {
        USD: 260.34,
        time: getTime(new Date()),
        success: true,
      },
    ],
    FB: [
      {
        USD: 266.77,
        time: getTime(new Date()),
        success: true,
      },
    ],
    TSLA: [
      {
        USD: 272.13,
        time: getTime(new Date()),
        success: true,
      },
    ],
  });
});

test("should handle adding to an 'empty' object", () => {
  const previousState = {
    AAPL: [
      {
        USD: 0,
        time: "",
        success: true,
      },
    ],

    GOOGL: [
      {
        USD: 0,
        time: "",
        success: true,
      },
    ],
    MSFT: [
      {
        USD: 0,
        time: "",
        success: true,
      },
    ],
    AMZN: [
      {
        USD: 0,
        time: "",
        success: true,
      },
    ],
    FB: [
      {
        USD: 0,
        time: "",
        success: true,
      },
    ],
    TSLA: [
      {
        USD: 0,
        time: "",
        success: true,
      },
    ],
  };
  expect(reducer(previousState, setData(testState))).toEqual({
    AAPL: [
      {
        USD: 0,
        time: "",
        success: true,
      },
      {
        USD: 279.29,
        time: getTime(new Date()),
        success: true,
      },
    ],

    GOOGL: [
      {
        USD: 0,
        time: "",
        success: true,
      },
      {
        USD: 237.08,
        time: getTime(new Date()),
        success: true,
      },
    ],
    MSFT: [
      {
        USD: 0,
        time: "",
        success: true,
      },
      {
        USD: 261.46,
        time: getTime(new Date()),
        success: true,
      },
    ],
    AMZN: [
      {
        USD: 0,
        time: "",
        success: true,
      },
      {
        USD: 260.34,
        time: getTime(new Date()),
        success: true,
      },
    ],
    FB: [
      {
        USD: 0,
        time: "",
        success: true,
      },
      {
        USD: 266.77,
        time: getTime(new Date()),
        success: true,
      },
    ],
    TSLA: [
      {
        USD: 0,
        time: "",
        success: true,
      },
      {
        USD: 272.13,
        time: getTime(new Date()),
        success: true,
      },
    ],
  });
});
test("should handle adding to an existing object", () => {
  const previousState = {
    AAPL: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
    ],

    GOOGL: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
    ],
    MSFT: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
    ],
    AMZN: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
    ],
    FB: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
    ],
    TSLA: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
    ],
  };
  expect(reducer(previousState, setData(testState))).toEqual({
    AAPL: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
      {
        USD: 279.29,
        time: getTime(new Date()),
        success: true,
      },
    ],

    GOOGL: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
      {
        USD: 237.08,
        time: getTime(new Date()),
        success: true,
      },
    ],
    MSFT: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
      {
        USD: 261.46,
        time: getTime(new Date()),
        success: true,
      },
    ],
    AMZN: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
      {
        USD: 260.34,
        time: getTime(new Date()),
        success: true,
      },
    ],
    FB: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
      {
        USD: 266.77,
        time: getTime(new Date()),
        success: true,
      },
    ],
    TSLA: [
      {
        USD: 528.65,
        time: "18.25.36",
        success: true,
      },
      {
        USD: 272.13,
        time: getTime(new Date()),
        success: true,
      },
    ],
  });
});
