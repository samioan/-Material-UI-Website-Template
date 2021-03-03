import React from "react";
import { VideoItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import videoDetails from "./util/videoDetails";

const useStyles = makeStyles({
  root: {
    color: "#fff",
  },
});

export default function Videos() {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Box mt={10}>
        <Typography
          className={classes.root}
          variant="h1"
          align="center"
          color="#fff"
          component="h1"
        >
          Videos
        </Typography>
      </Box>
      <Box mt={5} mb={5}>
        <Typography
          className={classes.root}
          variant="h4"
          align="center"
          color="#fff"
          component="h4"
        >
          My Games
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        m={2}
      >
        {videoDetails
          .filter((videoItem) => videoItem.genre === "My Games")
          .filter((videoItem) => videoItem.visible)
          .map((videoItem) => (
            <Box p={2} minWidth="30%">
              <VideoItem
                link={videoItem.link}
                title={videoItem.title}
                tagline={videoItem.tagline}
              />
            </Box>
          ))}
      </Box>
      <Box mt={5} mb={5}>
        <Typography
          className={classes.root}
          variant="h4"
          align="center"
          color="#fff"
          component="h4"
        >
          My Music
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        m={2}
      >
        {videoDetails
          .filter((videoItem) => videoItem.genre === "My Music")
          .filter((videoItem) => videoItem.visible)
          .map((videoItem) => (
            <Box p={2} minWidth="30%">
              <VideoItem
                link={videoItem.link}
                title={videoItem.title}
                tagline={videoItem.tagline}
              />
            </Box>
          ))}
      </Box>

      <Box mt={5} mb={5}>
        <Typography
          className={classes.root}
          variant="h4"
          align="center"
          color="#fff"
          component="h4"
        >
          Obscure Games
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        m={2}
      >
        {videoDetails
          .filter((videoItem) => videoItem.genre === "Obscure Games")
          .filter((videoItem) => videoItem.visible)
          .map((videoItem) => (
            <Box p={2} minWidth="30%">
              <VideoItem
                link={videoItem.link}
                title={videoItem.title}
                tagline={videoItem.tagline}
              />
            </Box>
          ))}
      </Box>
    </div>
  );
}
