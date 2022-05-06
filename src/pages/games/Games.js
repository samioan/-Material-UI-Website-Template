import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import styles from "theme/styles";
import gameData from "data/gameData";
import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import MediaCard from "components/interactive/media-card";
import ShowMoreButton from "components/interactive/show-more-button";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

const Games = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

  const [itemsShown, setItemsShown] = useState(12);

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Games
        </Typography>
        <Grid className={classes.content} container justify="center">
          {Object.values(gameData)
            .slice(0, itemsShown)
            .map((gameItem) => (
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
                  downloadLink={gameItem.links[0]}
                  itchioLink={gameItem.links[1]}
                  pageLink={gameItem.links[2]}
                />
              </Grid>
            ))}
          {itemsShown < Object.values(gameData).length && (
            <ShowMoreButton onClick={() => setItemsShown(itemsShown + 6)} />
          )}
        </Grid>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Games };
export default withScrollbars(Games);
