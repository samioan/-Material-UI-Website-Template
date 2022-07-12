import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { MediaCard, ShowMoreButton } from "components";

import styles from "./styles";

const GeneralPage = ({
  currentPage,
  title,
  itemsShown,
  itemsOnPage,
  itemsTotal,
  loadMoreItems,
}) => {
  const classes = styles();

  return (
    <main className={classes.page}>
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
        {itemsOnPage < itemsTotal && <ShowMoreButton onClick={loadMoreItems} />}
      </Grid>
    </main>
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
export default GeneralPage;
