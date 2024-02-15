import { createTheme, ThemeOptions } from "@mui/material";

import typography from "./typography";

const appTheme: ThemeOptions = {
  typography,
  palette: {
    primary: {
      main: "#458CFF",
    },
  },
};

export default createTheme(appTheme);
