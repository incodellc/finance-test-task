import { keyframes } from "@emotion/react";

export const colorIndicator = (condition: boolean) => keyframes`
    0% {
        background-color: ${condition ? 'red' : 'green'}
    }
    100% {
        background-color: white
    }
`;
