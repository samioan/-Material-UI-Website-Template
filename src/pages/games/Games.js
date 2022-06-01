import React from "react";
import { compose } from "redux";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import styles from "theme/styles";
import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import MediaCard from "components/interactive/media-card";
import ShowMoreButton from "components/interactive/show-more-button";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import withGamesProps from "./withGamesProps";

const Games = ({
  showScrollToTopButton,
  scrollToTop,
  onLoadMoreGames,
  gamesShown,
  gamesOnPage,
  gamesTotal,
  currentPage,
}) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Games
        </Typography>
        <Grid className={classes.content} container justify="center">
          {gamesShown.map((gameItem) => (
            <Grid
              key={gameItem.title}
              className={classes.content}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <MediaCard
                currentPage={currentPage}
                image={gameItem.cardImage}
                title={gameItem.title}
                tagline={gameItem.subtitle}
                genre={gameItem.genre}
                downloadLink={gameItem.links[0]}
                itchioLink={gameItem.links[1]}
                pageLink={gameItem.links[2]}
              />
            </Grid>
          ))}
          {gamesOnPage < gamesTotal && (
            <ShowMoreButton onClick={onLoadMoreGames} />
          )}
        </Grid>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Games };
export default compose(withGamesProps, withScrollbars)(Games);
