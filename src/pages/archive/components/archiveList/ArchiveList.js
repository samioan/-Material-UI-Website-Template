import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import { LoadingImage, ShowMoreButton } from "components";

import styles from "./styles";

const ArchiveList = ({
  label,
  isInnerList,
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
    <>
      <Typography
        className={isInnerList ? classes.innerLabel : classes.label}
        variant="h5"
        align="center"
      >
        {label}
      </Typography>
      <div className={classes.gridList}>
        <GridList cols={12}>
          {archiveDetailsArray.map((item) => (
            <GridListTile
              cols={getGridListCols}
              key={item.title}
              component={Link}
              to={{
                pathname: item.link,
              }}
              target="_blank"
              rel="noreferrer"
            >
              <LoadingImage
                image={item.img}
                customLoaderClass={classes.loading}
                customImageClass={classes.image}
                alt={item.title}
              />
              <GridListTileBar
                title={item.title}
                className={classes.gridTitle}
              />
            </GridListTile>
          ))}
        </GridList>
        <Grid
          container
          justify="center"
          className={classes.showMoreButtonContainer}
        >
          {itemsOnPage < itemsTotal && (
            <ShowMoreButton onClick={loadMoreItems} />
          )}
        </Grid>
      </div>
    </>
  );
};
export { ArchiveList };
export default withWidth()(ArchiveList);
