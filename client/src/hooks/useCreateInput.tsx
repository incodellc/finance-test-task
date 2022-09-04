import { 
    Box, 
    Button, 
    TextField 
} from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import { socket } from "../App";
import { SocketEvents } from "../socketEvents";
import { useActions } from "./useActions";

type InputIvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export enum InputActions {
    SET_INTERVAL = 'set_interval',
    SET_TICKER = 'set_ticker'
};

interface Props {
    type: string,
    label: string,
    text: string
};

type useCreateInput = (emitAction: InputActions) => React.FC<Props>;

export const useCreateInput: useCreateInput = (emitAction) => {
    const [state, setState] = useState('');
    const { setTickers } = useActions();
    const enableAutofocus = useRef(null);

    const handleChange = (event: InputIvent) => {
        setState(event.target.value);
    };

    const handleClick = () => {
        socket.emit(SocketEvents.CLEAR_INTERVAL);

        switch (emitAction) {
            case InputActions.SET_INTERVAL:
                socket.emit(SocketEvents.START, +state * 1000);
                break;
            case InputActions.SET_TICKER:
                socket.emit(SocketEvents.ADD_TICKER, state);
                socket.emit(SocketEvents.START);
                break; 
        }

        socket.on(SocketEvents.TICKER, (data) => {
            setTickers(data);
        });

        setState('');
    };

    return ({ 
        type,
        label,
        text
    }) => (
        <Box 
            alignItems="center"
            display="flex"
            justifyContent="space-around"
            margin={5}
            width="100%"
        >
            <TextField
                ref={enableAutofocus}
                id="outlined-number"
                label={label}
                type={type}
                autoFocus={enableAutofocus.current !== null}
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
