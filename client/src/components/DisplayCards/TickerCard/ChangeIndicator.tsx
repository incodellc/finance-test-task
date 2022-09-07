import React from "react";
import { Box } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface Props {
    condition: boolean,
    change_percent: string
};

export const ArrowIndicator: React.FC<Props> = ({ condition, change_percent }) => {
    return !condition ? (
        <Box alignItems="center" display="flex">
            {` (+${change_percent}%`}
            <ArrowUpwardIcon 
                style={{ 
                    color: 'green',
                    height: 15,
                }} 
            />
            {')'}
        </Box>
    ) : (
        <Box alignItems="center" display="flex">
            {` (-${change_percent}%`}
            <ArrowDownwardIcon 
                style={{ 
                    color: 'red',
                    height: 15,
                }} 
            />
            {')'}
        </Box>
    );
};
