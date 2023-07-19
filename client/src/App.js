import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { tickersReceived } from "./redux/features/tickers-slice";
import { TickersList } from "./components/tickers-list";

import "./index.css";

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

  return (tickers.length > 0 && (
    <div className="w-screen h-screen flex justify-center">
      <TickersList tickers={tickers} />
    </div>
  ));
}

export default App;
