import React, { useEffect } from "react";
import { VideoItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import videoDetails from "./util/videoDetails";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#000",
    maxWidth: 800,
    minWidth: "60%",
    margin: "auto",
    minHeight: "100vh",
  },
  title: {
    color: "#fff",
  },
});

export default function Videos() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box className={classes.page}>
        <Box pt={10}>
          <Typography
            className={classes.title}
            variant="h1"
            align="center"
            color="#fff"
            component="h1"
          >
            Videos
          </Typography>
        </Box>
        <Box pt={5} pb={5}>
          <Typography
            className={classes.title}
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
          p={2}
        >
          {videoDetails
            .filter((videoItem) => videoItem.genre === "My Games")
            .map((videoItem) => (
              <Box key={videoItem.title} p={2}>
                <VideoItem link={videoItem.link} title={videoItem.title} />
              </Box>
            ))}
        </Box>
        <Box pt={5} pb={5}>
          <Typography
            className={classes.title}
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
          p={2}
        >
          {videoDetails
            .filter((videoItem) => videoItem.genre === "My Music")
            .map((videoItem) => (
              <Box key={videoItem.title} p={2}>
                <VideoItem link={videoItem.link} title={videoItem.title} />
              </Box>
            ))}
        </Box>
      </Box>
    </div>
  );
}
