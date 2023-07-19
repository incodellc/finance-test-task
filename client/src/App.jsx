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
    <div className="container w-fit mx-auto h-screen flex flex-col justify-center gap-2 mt-5 justify-center">
      <h3 className="font-medium text-slate-700 text-sm">Popular:</h3>
      <TickersList tickers={tickers} />
    </div>
  ));
}

export default App;
