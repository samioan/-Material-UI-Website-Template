import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import archiveDetails from "./util/archiveDetails";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#000",
    maxWidth: 800,
    minWidth: "60%",
    margin: "auto",
    minHeight: "100vh",
  },
  root: {
    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "90%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

const Archive = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className={classes.page}>
      <div className={classes.root}>
        <Box pt={10} pb={5} width="100%">
          <Typography
            className={classes.root}
            variant="h1"
            align="center"
            color="#fff"
          >
            Archive
          </Typography>
        </Box>
        <Box pb={5} width="100%">
          <Typography
            className={classes.root}
            variant="h4"
            align="center"
            color="#fff"
          >
            Games
          </Typography>
        </Box>

        <GridList col={4} className={classes.gridList}>
          {archiveDetails
            .filter((tile) => tile.kind === "Games")
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
                <img src={tile.img} alt={tile.title} />

                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      target="_blank"
                      href={tile.link}
                    >
                      <GetAppIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>

        <Box pt={5} pb={5} width="100%">
          <Typography
            className={classes.root}
            variant="h4"
            align="center"
            color="#fff"
          >
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
                <img src={tile.img} alt={tile.title} />

                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      target="_blank"
                      href={tile.link}
                    >
                      <GetAppIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>

        <Box pt={5} pb={5} width="100%">
          <Typography
            className={classes.root}
            variant="h4"
            align="center"
            color="#fff"
          >
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
                <img src={tile.img} alt={tile.title} />

                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      target="_blank"
                      href={tile.link}
                    >
                      <GetAppIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    </Box>
  );
};
export { Archive };
export default Archive;
