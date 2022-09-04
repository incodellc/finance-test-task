import io from 'socket.io-client';
import React from "react";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { DisplayCards } from "./components/DisplayCards";
import { InputInterval } from './components/InputInterval';
import { Box } from '@mui/material';
import { InputTicker } from './components/InputTicker';
import { SocketEvents } from './socketEvents';

const PORT = process.env.PORT || 4000;

export const socket  = io(`http://localhost:${PORT}`);

const App: React.FC = () => {
  const { setTickers } = useActions();

  useEffect(() => {
    socket.emit(SocketEvents.START);
    socket.on(SocketEvents.TICKER, (data) => {
      setTickers(data)
    });

    return () => {
      socket.emit(SocketEvents.CLEAR_INTERVAL);
    };
  }, []);

  return (
    <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth={900}
        margin="auto"
    >
      <InputInterval />
      <DisplayCards />
      <InputTicker />
    </Box>
  );
};

export default App;
