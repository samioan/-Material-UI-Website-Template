import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { GameItem } from "./components";
import gameData from "../data/gameData.json";

import { Scrollbars } from "react-custom-scrollbars";

import Theme from "../theme";

const Games = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Scrollbars
      style={{ height: "100vh" }}
      autoHide
      autoHideTimeout={1000}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
      )}
    >
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h2" align="center">
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
    </Scrollbars>
  );
};

export { Games };
export default Games;
