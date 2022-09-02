import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { socket } from "../App";
import { useActions } from "../hooks/useActions";

type InputIvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const InputInterval: React.FC = () => {
    const [interval, setInterval] = useState('');
    const { setTickers } = useActions();

    const handleChange = (event: InputIvent) => {
        setInterval(event.target.value);
    };

    const handleClick = () => {
        socket.emit('clear_interval');
        socket.emit('start', interval);
        socket.on('ticker', (data) => {
            setTickers(data);
        });
    };

    return (
        <Box 
            alignItems="center"
            display="flex"
            justifyContent="space-around"
            mb={10}
            width="100%"
        >
            <TextField
                id="outlined-number"
                label="Time, ms"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={interval}
                onChange={handleChange}
            />
            <Button 
                variant="contained"
                onClick={handleClick}
            >
                Set Interval
            </Button>
        </Box>
    );
};
