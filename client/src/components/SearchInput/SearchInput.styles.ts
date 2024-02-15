import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  textField: {
    backgroundColor: "#F8F8F9",
    marginTop: 0,
  },
  notchedOutline: {
    borderColor: "#E4E7EF",

    "&:hover": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
  },
  input: {
    padding: "12px",
  },
}));
