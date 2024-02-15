import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(2),

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
    padding: theme.spacing(2),
  },
  dashboard: {
    marginTop: theme.spacing(10),

    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
}));
