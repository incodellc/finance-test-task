import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: "700px",
    margin: "0 auto",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#93A1AF",

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
}));
