import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme: Theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  logo: {
    borderRadius: theme.spacing(1),
  },
  avatarContainer: {
    flexGrow: 0,
    marginLeft: "auto",
  },
}));
