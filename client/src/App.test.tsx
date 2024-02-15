import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

describe("App component", () => {
  it("renders all child components", () => {

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );;


    const headerElement = screen.getByTestId("header-component");
    expect(headerElement).toBeInTheDocument();

    const tickersElement = getByTestId("tickers-component");
    expect(tickersElement).toBeInTheDocument();

    const footerElement = getByTestId("footer-component");
    expect(footerElement).toBeInTheDocument();
  });
});
