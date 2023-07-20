import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { tickersReceived } from "./redux/features/tickers-slice";
import { TickersList } from "./components/ticker/tickers-list";

import "./index.css";
import { WatchingList } from "./components/watching tickers/watching-list";

function App() {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);
  const [watchTickers, setWatchTickers] = useState([]);
  const [activeTicket, setActiveTicket] = useState("");

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");

    socket.emit("start");
    socket.on("ticker", (response) => {
      dispatch(tickersReceived(response));
    });
  }, [dispatch]);

  return (
    tickers.length > 0 && (
      <div className="container w-fit mx-auto h-screen flex mt-5 justify-center gap-12 justify-center mb-20">
        <div className="flex flex-col gap-2 items-start">
          <h3 className="font-medium text-slate-700 text-sm">Popular:</h3>
          <TickersList
            tickers={tickers}
            watchList={watchTickers}
            setWatchList={setWatchTickers}
            setActiveTicker={setActiveTicket}
            activeTicket={activeTicket}
          />
        </div>
        <WatchingList
          watchTickers={watchTickers}
          tickers={tickers}
          setWatchTickers={setWatchTickers}
          activeTicket={activeTicket}
          setActiveTicket={setActiveTicket}
        />
      </div>
    )
  );
}

export default App;
