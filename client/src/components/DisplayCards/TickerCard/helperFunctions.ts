import { SocketEvents } from '../../../utils/socket_events';
import { socket } from "../../../App";
import { keyframes } from '@mui/material';

export const colorIndicator = (condition: boolean) => keyframes`
    0% {
        background-color: ${condition ? 'red' : 'green'}
    }
    100% {
        background-color: white
    }
`;

export const removeTicker = (name: string, callback: (data: any) => void) => {
    socket.emit(SocketEvents.CLEAR_INTERVAL);
    socket.emit(SocketEvents.REMOVE_TICKER, name);
    socket.emit(SocketEvents.START);
    socket.on(SocketEvents.TICKER, (data) => {
        callback(data);
    });
};
