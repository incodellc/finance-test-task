import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Tooltip, Typography } from "@mui/material";
import clsx from "clsx";
import { FC } from "react";

import { useStyles } from "./TickerCard.styles";
import { TickerCardProps } from "./TickerCardProps.types";
import { useTickerCard } from "./useTickerCard";

export const TickerCard: FC<TickerCardProps> = ({ quote }) => {
  const { classes } = useStyles();
  const {
    ticker, price, change_percent, change, dividend
  } = quote;
  const { handleAddCard } = useTickerCard(ticker);
  const isPriceWentDown = +change < 0;

  const renderTextField = (text: string, isColorRed?: boolean) => {
    let formattedText = text;
    let customClasses;

    if (isColorRed !== undefined) {
      formattedText = isColorRed ? `-${text}` : `+${text}`;
      customClasses = isColorRed ? classes.textRed : classes.textGreen;
    }

    return (
      <Typography className={clsx(classes.text, customClasses)}>
        {formattedText}
      </Typography>
    );
  };

  return (
    <Tooltip title="Click to add to dashboard">
      <Box className={classes.root} onClick={handleAddCard}>
        <ArrowUpwardIcon
          className={clsx(classes.icon, isPriceWentDown && classes.iconRed)}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold" }} className={classes.text}>
            {ticker}
          </Typography>
          {renderTextField(price)}
        </Box>
        <Box>
          {renderTextField(`${change_percent}%`, isPriceWentDown)}
          {renderTextField(change)}
        </Box>
        <Box>
          {renderTextField(dividend, isPriceWentDown)}
          {renderTextField(quote.yield, isPriceWentDown)}
        </Box>
      </Box>
    </Tooltip>
  );
};
