import { 
    Box, 
    Button, 
    TextField 
} from "@mui/material";
import React, { useState } from "react";
import { socket } from "../../App";
import { SocketEvents } from "../../utils/socket_events";
import { useActions } from "../../hooks/useActions";

type InputIvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export enum InputActions {
    SET_INTERVAL = 'set_interval',
    ADD_TICKER = 'add_ticker'
};

interface Props {
    emitAction: InputActions,
    type: string,
    label: string,
    text: string,
};

export const InputElement: React.FC<Props> = ({
    emitAction,
    type,
    label,
    text,
}) => {
    const [state, setState] = useState('');
    const { setTickers } = useActions();

    const handleChange = (event: InputIvent) => {
        setState(event.target.value);
    };

    const handleClick = () => {
        socket.emit(SocketEvents.CLEAR_INTERVAL);
        
        switch (emitAction) {
            case InputActions.SET_INTERVAL:
                socket.emit(SocketEvents.START, +state * 1000);
                break;
            case InputActions.ADD_TICKER:
                socket.emit(SocketEvents.ADD_TICKER, state);
                socket.emit(SocketEvents.START);
                break; 
        }

        socket.on(SocketEvents.TICKER, (data) => {
            setTickers(data);
        });

        setState('');
    };

    return (
        <Box 
            alignItems="center"
            display="flex"
            justifyContent="space-around"
            margin={5}
            width="100%"
        >
            <TextField
                label={label}
                type={type}
                InputLabelProps={{
                    shrink: true,
                }}
                value={state}
                onChange={handleChange}
            />
            <Button 
                variant="contained"
                onClick={state.length > 0 ? handleClick : () => {}}
            >
                {text}
            </Button>
        </Box>
    );
};
