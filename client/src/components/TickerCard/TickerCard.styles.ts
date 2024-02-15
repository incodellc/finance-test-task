import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "10px",
    padding: "6px",
    borderRadius: theme.spacing(1),
    border: "1px solid rgb(218,220,224)",
    whiteSpace: "nowrap",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#efeded",
    },
  },
  icon: {
    padding: "2px",
    color: "rgb(19,115,51)",
    backgroundColor: "#e6f4ea",
    borderRadius: "5px",
  },
  iconRed: {
    color: "#c5221f",
    backgroundColor: "#fce8e6",
    rotate: "180deg",
  },
  text: {
    fontSize: "0.8rem",
  },
  textRed: {
    color: "#c5221f",
  },
  textGreen: {
    color: "#26954b",
  },
}));
