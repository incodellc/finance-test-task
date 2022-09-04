import React from "react";
import { InputActions, useCreateInput } from "../../hooks/useCreateInput";

export const InputTicker: React.FC = () => {
    const TickerElement = useCreateInput(InputActions.SET_TICKER);

    return (
        <TickerElement
            type="text"
            label="Name"
            text="add ticker"
        />   
    );
};
