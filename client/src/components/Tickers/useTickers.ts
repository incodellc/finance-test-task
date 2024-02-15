import { useEffect } from "react";
import io from "socket.io-client";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initQuotes } from "../../redux/slice/quoteSlice";
import { Quote } from "../../types/quote";

const BASE_URL = "http://localhost:4000";

export const useTickers = () => {
  const dispatch = useAppDispatch();
  const { quotes, personalTickers } = useAppSelector((state) => state.quote);

  useEffect(() => {
    const socket = io(BASE_URL);

    socket.on("ticker", (newStocks: Quote[]) => {
      dispatch(initQuotes(newStocks));
    });

    socket.on("connect_error", (err) => {
      console.error("Connect Error:", err);
    });
    socket.on("connect_failed", (err) => {
      console.error("Connection Failed:", err);
    });

    socket.emit("start");

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return { quotes, personalTickers };
};
