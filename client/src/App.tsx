import io from 'socket.io-client';
import React from "react";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { DisplayCards } from "./DisplayCards";

const PORT = process.env.PORT || 4000;
const socket  = io(`http://localhost:${PORT}`);

const App: React.FC = () => {
  const { setTickers } = useActions();

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (data) => {
      // console.log(data);
      setTickers(data);
    })
  }, []);

  return (
    <DisplayCards />
  );
};

export default App;
