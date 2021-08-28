import React from "react";
import styles from "./styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

const ArchiveList = ({ archiveDetailsArray, genre, image, width }) => {
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
        {archiveDetailsArray
          .filter((item) => item.kind === genre)
          .map((item) => (
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
              <ProgressiveImage src={item.img} placeholder={image}>
                {(src) => (
                  <img className={classes.images} src={src} alt={item.title} />
                )}
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
