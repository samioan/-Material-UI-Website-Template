import React from "react"; // , { useState }
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import styles from "theme/styles";
import musicData from "data/musicData";
import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import MediaCard from "components/interactive/media-card";
// import ShowMoreButton from "components/interactive/show-more-button";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

const Music = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

  // const [itemsShown, setItemsShown] = useState(12);

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Music
        </Typography>

        <Grid className={classes.content} container justify="center">
          {Object.values(musicData)
            // .slice(0, itemsShown)
            .map((musicItem) => (
              <Grid
                key={musicItem.title}
                className={classes.content}
                item
                xs={12}
                md={6}
                lg={4}
              >
                <MediaCard
                  image={musicItem.splashImage}
                  title={musicItem.title}
                  tagline={musicItem.subtitle}
                  genre={musicItem.genre}
                  downloadLink={musicItem.links[0]}
                  pageLink={musicItem.links[1]}
                />
              </Grid>
            ))}

          {/* {itemsShown < Object.values(musicData).length && (
            <ShowMoreButton onClick={() => setItemsShown(itemsShown + 6)} />
          )} */}
        </Grid>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

export { Music };
export default withScrollbars(Music);
