import { Search, Clear } from "@mui/icons-material";
import {
  Box, InputAdornment, TextField, IconButton
} from "@mui/material";
import { FC } from "react";

import { useStyles } from "./SearchInput.styles";
import { SearchInputProps } from "./SearchInputProps";
import { useSearchInput } from "./useSearchInput";

export const SearchInput: FC<SearchInputProps> = (props) => {
  const { classes } = useStyles();
  const { handleChangeSearchQuery, query, handleClearSearchQuery }
    = useSearchInput(props);

  return (
    <Box>
      <TextField
        variant="outlined"
        className={classes.textField}
        fullWidth
        placeholder="Start typing"
        onChange={handleChangeSearchQuery}
        value={query}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
            input: classes.input,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: query.length > 0 && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClearSearchQuery}>
                <Clear />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
