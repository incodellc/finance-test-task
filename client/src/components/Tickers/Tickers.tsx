import { Container, Grid, Paper } from "@mui/material";
import { FC } from "react";

import { useStyles } from "./Tickers.styles";
import { useTickers } from "./useTickers";
import { Dashboard } from "../Dashboard";
import { TickerCard } from "../TickerCard";

export const Tickers: FC = () => {
  const { classes } = useStyles();
  const { quotes, personalTickers } = useTickers();

  return (
    <Container
      data-testid="tickers-component"
      component="main"
      maxWidth="xl"
      className={classes.root}
    >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {quotes.map((quote) => (
            <Grid item xl={2} lg={2} md={4} sm={6} xs={12} key={quote.ticker}>
              <TickerCard quote={quote} />
            </Grid>
          ))}
        </Grid>
        {!!personalTickers.length && (
          <Dashboard className={classes.dashboard} />
        )}
      </Paper>
    </Container>
  );
};
