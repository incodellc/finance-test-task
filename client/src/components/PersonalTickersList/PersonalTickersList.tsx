import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import React, { FC } from "react";

import { useStyles } from "./PersonalTickersList.styles";
import { PersonalTickersListProps } from "./PersonalTickersList.types";
import { usePersonalTickersList } from "./usePersonalTickersList";

export const PersonalTickersList: FC<PersonalTickersListProps> = (props) => {
  const { classes } = useStyles();
  const { handleDelete, userTickers } = usePersonalTickersList(props);

  const renderTextField = (text: string, change?: string) => {
    let formattedText = text;
    let customClasses;

    if (change !== undefined) {
      const isPriceWentDown = +change < 0;

      formattedText = isPriceWentDown ? `-${text}` : `+${text}`;
      customClasses = isPriceWentDown ? classes.textRed : classes.textGreen;
    }

    return (
      <Typography className={clsx(classes.text, customClasses)}>
        {formattedText}
      </Typography>
    );
  };

  return (
    <List>
      {userTickers.map(
        ({
          ticker, price, change_percent, change, dividend
        }) => (
          <React.Fragment key={ticker}>
            <ListItem
              className={clsx(classes.root, +change < 0 && classes.rootRed)}
            >
              <Typography sx={{ fontWeight: "bold" }} className={classes.text}>
                {ticker}
              </Typography>
              {renderTextField(price)}
              {renderTextField(change)}
              {renderTextField(dividend, change)}
              <Box display="flex" gap={1} alignItems="center">
                {renderTextField(`${change_percent}%`, change)}
                <ArrowUpwardIcon
                  className={clsx(classes.icon, +change < 0 && classes.iconRed)}
                />
              </Box>
              <IconButton
                color="error"
                size="small"
                onClick={() => handleDelete(ticker)}
              >
                <CancelIcon />
              </IconButton>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        )
      )}
    </List>
  );
};
