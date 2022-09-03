import io from 'socket.io-client';
import React from "react";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { DisplayCards } from "./DisplayCards";
import { InputInterval } from './InputInterval';
import { Box } from '@mui/material';

const PORT = process.env.PORT || 4000;

export const socket  = io(`http://localhost:${PORT}`);

const App: React.FC = () => {
  const { setTickers } = useActions();

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (data) => {
      setTickers(data)
    });

    return () => {
      socket.emit('clear_interval');
    };
  }, []);

  return (
    <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
    >
      <InputInterval />
      <DisplayCards />
    </Box>
  );
};

export default App;
