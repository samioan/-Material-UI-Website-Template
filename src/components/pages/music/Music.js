import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { MusicItem } from "./components";

import styles from "components/theme/styles";
import Footer from "components/layout/footer";
import musicData from "components/data/musicData";
import withScrollbars from "components/theme/withScrollbars";

const Music = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
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
      <Footer />
    </>
  );
};

export { Music };
export default withScrollbars(Music);
