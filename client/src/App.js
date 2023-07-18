import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { tickersReceived } from "./redux/features/tickers-slice";

function App() {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");

    socket.emit("start");
    socket.on("ticker", (response) => {
      dispatch(tickersReceived(response));
    });
  }, [dispatch]);

  console.log(tickers);

  return <h1>Hello world!</h1>;
}

export default App;
