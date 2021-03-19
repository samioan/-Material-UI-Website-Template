import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import archiveDetails from "./util/archiveDetails";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
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

  return (
    <div className={classes.root}>
      <Box mt={10} mb={5} width="100%">
        <Typography
          className={classes.root}
          variant="h1"
          align="center"
          color="#fff"
          component="h1"
        >
          Archive
        </Typography>
      </Box>
      <Box mb={5} width="100%">
        <Typography
          className={classes.root}
          variant="h4"
          align="center"
          color="#fff"
          component="h4"
        >
          Games
        </Typography>
      </Box>

      <GridList col={4} className={classes.gridList}>
        {archiveDetails
          .filter((tile) => tile.kind === "Games")
          .map((tile) => (
            <GridListTile key={tile.img} style={{ width: "50%", height: 200 }}>
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

      <Box mt={5} mb={5} width="100%">
        <Typography
          className={classes.root}
          variant="h4"
          align="center"
          color="#fff"
          component="h4"
        >
          Music
        </Typography>
      </Box>

      <GridList col={4} className={classes.gridList}>
        {archiveDetails
          .filter((tile) => tile.kind === "Music")
          .map((tile) => (
            <GridListTile key={tile.img} style={{ width: "50%", height: 200 }}>
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

      <Box mt={5} mb={5} width="100%">
        <Typography
          className={classes.root}
          variant="h4"
          align="center"
          color="#fff"
          component="h4"
        >
          Art
        </Typography>
      </Box>

      <GridList col={4} className={classes.gridList}>
        {archiveDetails
          .filter((tile) => tile.kind === "Art")
          .map((tile) => (
            <GridListTile key={tile.img} style={{ width: "50%", height: 200 }}>
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
  );
};
export { Archive };
export default Archive;
