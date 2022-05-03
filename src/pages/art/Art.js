import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { ArtItem } from "./components";
import artDetails from "./util/artDetails";

import styles from "theme/styles";
import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import ScrollToTopButton from "components/input/scroll-to-top-button";

const Art = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
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
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Art };
export default withScrollbars(Art);
