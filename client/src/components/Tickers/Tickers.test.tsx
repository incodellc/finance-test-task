import { render, screen } from "@testing-library/react";
import { Tickers } from "./Tickers";
import { useTickers } from "./useTickers";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Tickers as TickersType } from "../../types/quote";

jest.mock("./useTickers");

const mockQuotes = [
  {
    ticker: TickersType.AAPL,
    exchange: "130",
    price: "130",
    change: "130",
    change_percent: "130",
    dividend: "130",
    yield: "130",
    last_trade_time: new Date(),
  },
  {
    ticker: TickersType.GOOGL,
    exchange: "130",
    price: "130",
    change: "130",
    change_percent: "130",
    dividend: "130",
    yield: "130",
    last_trade_time: new Date(),
  },
];

describe("Tickers component", () => {
  test("renders TickerCard for each quote", () => {
    (useTickers as jest.Mock).mockImplementation(() => ({
      quotes: mockQuotes,
      personalTickers: [],
    }));

    render(
      <Provider store={store}>
        <Tickers />
      </Provider>
    );

    mockQuotes.forEach((quote) => {
      const tickerCardElement = screen.getByText(quote.ticker);
      expect(tickerCardElement).toBeInTheDocument();
    });
  });

  test("renders Dashboard if personalTickers are present", () => {
    (useTickers as jest.Mock).mockImplementation(() => ({
      quotes: mockQuotes,
      personalTickers: [TickersType.AAPL],
    }));

    render(
      <Provider store={store}>
        <Tickers />
      </Provider>
    );

    const dashboardElement = screen.getByTestId("dashboard-component");
    expect(dashboardElement).toBeInTheDocument();
  });
});
