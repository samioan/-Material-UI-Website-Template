import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Footer from "components/layout/footer";
import withScrollbars from "theme/withScrollbars";
import MediaCard from "components/interactive/media-card";
import ShowMoreButton from "components/interactive/show-more-button";
import ScrollToTopButton from "components/interactive/scroll-to-top-button";

import styles from "./styles";

const GeneralPage = ({
  showScrollToTopButton,
  scrollToTop,
  currentPage,
  title,
  itemsShown,
  itemsOnPage,
  itemsTotal,
  loadMoreItems,
}) => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          {title}
        </Typography>
        <Grid className={classes.content} container justify="center">
          {itemsShown.map(({ cardImage, title, subtitle, genre, links }) => (
            <Grid
              key={title}
              className={classes.content}
              item
              xs={12}
              md={6}
              lg={4}
            >
              <MediaCard
                currentPage={currentPage}
                image={cardImage}
                title={title}
                tagline={subtitle}
                genre={genre}
                pageLink={links && links[0]}
                downloadLink={links && links[1]}
                itchioLink={links && links[2]}
              />
            </Grid>
          ))}
          {itemsOnPage < itemsTotal && (
            <ShowMoreButton onClick={loadMoreItems} />
          )}
        </Grid>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};

GeneralPage.defaultProps = {
  title: "",
  itemsShown: [],
  itemsOnPage: null,
  itemsTotal: null,
  loadMoreItems: () => {},
};

export { GeneralPage };
export default withScrollbars(GeneralPage);
