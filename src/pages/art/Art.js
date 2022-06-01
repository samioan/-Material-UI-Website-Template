import React from "react";
import { compose } from "redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import styles from "theme/styles";
import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import MediaCard from "components/interactive/media-card";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import withArtProps from "./withArtProps";
import artDetails from "./util/artDetails";

const Art = ({ showScrollToTopButton, scrollToTop, currentPage }) => {
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
              <MediaCard
                currentPage={currentPage}
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
export default compose(withArtProps, withScrollbars)(Art);
