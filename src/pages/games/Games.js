import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import styles from "theme/styles";
import Footer from "components/layout/footer";
import gameData from "data/gameData";
import withScrollbars from "theme/withScrollbars";
import MediaCard from "components/interactive/media-card";
import ScrollToTopButton from "components/input/scroll-to-top-button";

const Games = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

  return (
    <>
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
              <MediaCard
                image={gameItem.cardImage}
                title={gameItem.title}
                tagline={gameItem.subtitle}
                genre={gameItem.genre}
                pageLink={gameItem.links[2]}
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

export { Games };
export default withScrollbars(Games);
