import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    gap: theme.spacing(2),
    justifyContent: "space-between",
    backgroundColor: "#e6f4ea",

    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(1),
    },
  },
  rootRed: {
    backgroundColor: "#fce8e6",
  },
  text: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },
  },
  textRed: {
    color: "#c5221f",
  },
  textGreen: {
    color: "#26954b",
  },
  icon: {
    padding: "2px",
    color: "rgb(19,115,51)",
  },
  iconRed: {
    color: "#c5221f",
    rotate: "180deg",
  },
}));
