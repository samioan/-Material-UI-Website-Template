import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { GameItem } from "./components";
import gameData from "../data/gameData.json";

import withScrollbars from "../theme/withScrollbars";

import theme from "../theme";

const Games = () => {
  const classes = theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h3" align="center">
        Games
      </Typography>
      <Grid className={classes.content} container justify="center">
        {Object.values(gameData).map((gameItem) => (
          <Grid
            key={gameItem.title}
            className={classes.content}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <GameItem
              image={gameItem.splashImage}
              title={gameItem.title}
              tagline={gameItem.subtitle}
              genre={gameItem.genre}
              pageLink={gameItem.links[2]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Games };
export default withScrollbars(Games);
