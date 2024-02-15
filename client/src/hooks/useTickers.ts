import { socket } from "@/lib/socket";
import { TickerData } from "@/types/ticker";
import { useEffect, useState } from "react";

export const useTickers = () => {
  const [tickerData, setTickerData] = useState<TickerData[]>([]);

  useEffect(() => {
    socket.emit("start");

    socket.on("ticker", (response) => {
      const res = Array.isArray(response) ? response : [response];
      setTickerData((prevData) => res);
    });
  }, []);

  return tickerData;
};
