import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { TickerPage } from "./pages/TickerPage/TickerPage";
import { setData } from "./redux/slices/chartSlices";
import { setCurrentPrice } from "./redux/slices/tickersSlices";

const App = () => {
  const dispatch = useDispatch();
  const socket = io("http://localhost:4000");

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (quotes) => {
      dispatch(setCurrentPrice([...quotes]));
      dispatch(setData([...quotes]));
    });
    return () => {
      socket.close();
    };
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ticker" element={<TickerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

export const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
