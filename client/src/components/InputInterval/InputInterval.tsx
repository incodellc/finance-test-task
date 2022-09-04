import React from "react";
import { InputActions, useCreateInput } from "../../hooks/useCreateInput";

export const InputInterval: React.FC = () => {
    const IntervalElement = useCreateInput(InputActions.SET_INTERVAL);

    return (
        <IntervalElement 
            type="number"
            label="Time, s"
            text="set interval"
        />
    );
};
