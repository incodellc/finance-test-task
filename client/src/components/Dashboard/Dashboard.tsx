import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";

import { useStyles } from "./Dashboard.styles";
import { PersonalTickersList } from "../PersonalTickersList";
import { SearchInput } from "../SearchInput";
import { DashboardProps } from "./Dashboard.types";
import clsx from "clsx";

export const Dashboard: FC<DashboardProps> = ({ className }) => {
  const { classes } = useStyles();
  const [applyQuery, setApplyQuery] = useState("");

  return (
    <Box
      data-testid="dashboard-component"
      className={clsx(classes.root, className)}
    >
      <Typography component="h1" className={classes.title} align="center">
        Dashboard
      </Typography>
      <SearchInput setApplyQuery={setApplyQuery} />
      <PersonalTickersList applyQuery={applyQuery} />
    </Box>
  );
};
