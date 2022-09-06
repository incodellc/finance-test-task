/* eslint-disable react-hooks/exhaustive-deps */
import io from 'socket.io-client';
import React from "react";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { DisplayCards } from "./components/DisplayCards";
import { Box } from '@mui/material';
import { SocketEvents } from './socketEvents';
import { Ticker } from './store/slice/tickerSlice';
import { InputActions, InputElement } from './components/InputElement';

const PORT = process.env.PORT || 4000;

export const socket  = io(`http://localhost:${PORT}`);

const App: React.FC = () => {
  const { setTickers } = useActions();

  useEffect(() => {
    socket.emit(SocketEvents.START);
    socket.on(SocketEvents.TICKER, (data: Ticker[]) => {
      setTickers(data);
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
      <InputElement
        emitAction={InputActions.SET_INTERVAL}
        type="number"
        label="Time, s"
        text="set interval"
      />
      <DisplayCards />
      <InputElement
        emitAction={InputActions.ADD_TICKER}
        type="text"
        label="Name"
        text="add ticker"
      />
    </Box>
  );
};

export default App;
