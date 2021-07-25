import React, { useEffect } from "react";
import styles from "./styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import archiveDetails from "./constants/archiveDetails";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import placeholderGif from "./images/placeholder";

const Archive = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className={classes.page}>
      <div className={classes.root}>
        <Box pt={10} pb={5} width="100%">
          <Typography className={classes.root} variant="h2" align="center">
            Archive
          </Typography>
        </Box>
        <Box pb={5} width="100%">
          <Typography className={classes.root} variant="h5" align="center">
            Games
          </Typography>
        </Box>

        <GridList col={4} className={classes.gridList}>
          {archiveDetails
            .filter((tile) => tile.kind === "Games")
            .map((tile) => (
              <GridListTile
                key={tile.title}
                style={{ width: "50%", height: 200 }}
                component={Link}
                to={{
                  pathname: tile.link,
                }}
                target="_blank"
                rel="noreferrer"
              >
                <ProgressiveImage src={tile.img} placeholder={placeholderGif}>
                  {(src) => (
                    <img
                      className={classes.images}
                      src={src}
                      alt={tile.title}
                    />
                  )}
                </ProgressiveImage>

                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
        </GridList>

        <Box pt={5} pb={5} width="100%">
          <Typography className={classes.root} variant="h5" align="center">
            Music
          </Typography>
        </Box>

        <GridList col={4} className={classes.gridList}>
          {archiveDetails
            .filter((tile) => tile.kind === "Music")
            .map((tile) => (
              <GridListTile
                key={tile.img}
                style={{ width: "50%", height: 200 }}
                component={Link}
                to={{
                  pathname: tile.link,
                }}
                target="_blank"
                rel="noreferrer"
              >
                <ProgressiveImage src={tile.img} placeholder={placeholderGif}>
                  {(src) => (
                    <img
                      className={classes.images}
                      src={src}
                      alt={tile.title}
                    />
                  )}
                </ProgressiveImage>

                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
        </GridList>

        <Box pt={5} pb={5} width="100%">
          <Typography className={classes.root} variant="h5" align="center">
            Art
          </Typography>
        </Box>

        <GridList col={4} className={classes.gridList}>
          {archiveDetails
            .filter((tile) => tile.kind === "Art")
            .map((tile) => (
              <GridListTile
                key={tile.img}
                style={{ width: "50%", height: 200 }}
                component={Link}
                to={{
                  pathname: tile.link,
                }}
                target="_blank"
                rel="noreferrer"
              >
                <ProgressiveImage src={tile.img} placeholder={placeholderGif}>
                  {(src) => (
                    <img
                      className={classes.images}
                      src={src}
                      alt={tile.title}
                    />
                  )}
                </ProgressiveImage>

                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
        </GridList>
      </div>
    </Box>
  );
};
export { Archive };
export default Archive;
