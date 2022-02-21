import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { MusicItem } from "./components";

import musicData from "../data/musicData.json";

import withScrollbars from "../theme/withScrollbars";
import Theme from "../theme";

const Music = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Music
      </Typography>

      <Grid className={classes.content} container justify="center">
        {Object.values(musicData).map((musicItem) => (
          <Grid
            key={musicItem.title}
            className={classes.content}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <MusicItem
              image={musicItem.splashImage}
              title={musicItem.title}
              tagline={musicItem.subtitle}
              genre={musicItem.genre}
              pageLink={musicItem.links[1]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Music };
export default withScrollbars(Music);
