import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import { LoadingImage, ShowMoreButton } from "components";

import styles from "./styles";

const ArchiveList = ({
  archiveDetailsArray,
  width,
  itemsOnPage,
  itemsTotal,
  loadMoreItems,
}) => {
  const classes = styles();

  const getGridListCols = (() => {
    if (isWidthUp("md", width)) {
      return 6;
    }

    return 12;
  })();

  return (
    <div className={classes.gridList}>
      <ImageList cols={12}>
        {archiveDetailsArray.map((item) => (
          <ImageListItem cols={getGridListCols} key={item.title}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <LoadingImage
                image={item.img}
                customLoaderClass={classes.loading}
                customImageClass={classes.image}
                alt={item.title}
              />
              <ImageListItemBar title={item.title} />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
      <Grid
        container
        justifyContent="center"
        className={classes.showMoreButtonContainer}
      >
        {itemsOnPage < itemsTotal && <ShowMoreButton onClick={loadMoreItems} />}
      </Grid>
    </div>
  );
};
export { ArchiveList };
export default withWidth()(ArchiveList);
