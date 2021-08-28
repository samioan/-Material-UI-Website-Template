import React, { useEffect } from "react";
import { GameItem } from "./components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Theme from "../theme";
import gameDetails from "./constants/gameDetails";

const Games = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
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
            lg={6}
            xl={4}
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
    </div>
  );
};

export { Games };
export default Games;
