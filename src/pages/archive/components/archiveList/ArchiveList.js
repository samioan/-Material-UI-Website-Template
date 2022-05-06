import React from "react";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import LoadingImage from "components/design/loading-image";

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
            <LoadingImage
              image={item.img}
              customLoaderClass={classes.loading}
              customImageClass={classes.image}
              alt={item.title}
            />
            <GridListTileBar title={item.title} className={classes.gridTitle} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export { ArchiveList };
export default withWidth()(ArchiveList);
