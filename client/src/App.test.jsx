import { render, screen } from "@testing-library/react";
import MockedSocket from "socket.io-mock";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux";

describe("App", () => {
  it("call emit start on mount", async () => {
    let { socketClient: socket, socket: rlSocket } = new MockedSocket();
    socket.emit = jest.fn();
    render(
      <Provider store={store}>
        <App socket={socket} />
      </Provider>
    );
    expect(socket.emit).toBeCalledWith("start");
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
