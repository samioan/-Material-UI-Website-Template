import React from "react";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import ProgressiveImage from "react-progressive-graceful-image";

import styles from "./styles";

const ArchiveList = ({ archiveDetailsArray, width }) => {
  const classes = styles();

  const getGridListCols = () => {
    if (isWidthUp("md", width)) {
      return 6;
    }

    return 12;
  };

  return (
    <div className={classes.gridList}>
      <GridList cols={12}>
        {archiveDetailsArray.map((item) => (
          <GridListTile
            cols={getGridListCols()}
            key={item.title}
            component={Link}
            to={{
              pathname: item.link,
            }}
            target="_blank"
            rel="noreferrer"
          >
            <ProgressiveImage src={item.img} placeholder="">
              {(src, loading) => {
                return loading ? (
                  <div className={classes.loading}>
                    <CircularProgress />
                  </div>
                ) : (
                  <img className={classes.image} src={src} alt={item.title} />
                );
              }}
            </ProgressiveImage>

            <GridListTileBar title={item.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export { ArchiveList };
export default withWidth()(ArchiveList);
