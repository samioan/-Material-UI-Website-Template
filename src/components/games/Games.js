import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { GameItem } from "./components";
import gameDetails from "./constants/gameDetails";

import Theme from "../theme";

const Games = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Games
      </Typography>
      <Grid className={classes.content} container justify="center">
        {gameDetails.map((gameItem) => (
          <Grid
            key={gameItem.title}
            className={classes.content}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <GameItem
              image={gameItem.image}
              title={gameItem.title}
              tagline={gameItem.tagline}
              genre={gameItem.genre}
              pageLink={gameItem.pageLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Games };
export default Games;
