import { act, fireEvent, render, screen } from "@testing-library/react";
import TimerForm from "./index";
import MockedSocket from "socket.io-mock";
describe("Timer form", () => {
  it("emit the default value", () => {
    let { socketClient: socket } = new MockedSocket();
    socket.emit = jest.fn();
    render(<TimerForm socket={socket} />);
    const button = screen.getByText("Submit").closest("button");
    expect(button).toBeInTheDocument();
    button.click();
    expect(socket.emit).toBeCalledWith("start", 5000);
  });

  it("emitted with new timer", () => {
    let { socketClient: socket } = new MockedSocket();
    socket.emit = jest.fn();
    render(<TimerForm socket={socket} />);
    const button = screen.getByText("Submit").closest("button");
    const input = screen.getByRole("spinbutton");
    act(() => {
      fireEvent.change(input, {
        target: { value: 3000 },
      });
    });
    expect(button).toBeInTheDocument();
    button.click();
    expect(socket.emit).toBeCalledWith("start", 3000);
  });

  it("disable button when socket disconnected", () => {
    let { socketClient: socket } = new MockedSocket();
    socket.connected = false;
    render(<TimerForm socket={socket} />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });
});
