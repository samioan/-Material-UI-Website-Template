import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { ArtItem } from "./components";

import artDetails from "./util/artDetails";

import Theme from "../theme";
import withScrollbars from "../theme/withScrollbars";

const Art = () => {
  const classes = Theme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Art
      </Typography>

      <Grid className={classes.content} container justify="center">
        {artDetails.map((artItem) => (
          <Grid
            key={artItem.title}
            className={classes.content}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <ArtItem
              image={artItem.image}
              title={artItem.title}
              link={artItem.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Art };
export default withScrollbars(Art);
