import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import gameDetails from "../../util/gameDetails";
import { useRouteMatch } from "react-router-dom";
import YouTube from "@u-wave/react-youtube";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#000",
    maxWidth: 800,
    minWidth: "20%",
    margin: "auto",
    minHeight: "100vh",
  },
  textPage: {
    maxWidth: 347,
    minWidth: 347,
  },
  video: {
    minWidth: 347,
    minHeight: "100%",
    maxWidth: 347,
    maxHeight: "100%",
  },
  images: {
    minWidth: 347,
    minHeight: "100%",
    maxWidth: 347,
    maxHeight: "100%",
    margin: "auto",
  },
  title: {
    color: "#fff",
  },
  tagline: {
    color: "#606060",
  },
  description: {
    color: "#c3c3c3",
  },
});

const gamePageDetails = (game) => {
  const link = game.split("/")[2];

  for (var i = 0; i < gameDetails.length; i++) {
    if (gameDetails[i].pageLink === link) {
      return gameDetails[i];
    }
  }
};

const GamePage = () => {
  const classes = useStyles();
  let match = useRouteMatch();
  const websiteLink = gamePageDetails(match.url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${websiteLink.background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Box className={classes.page}>
        <Box pt={10} align="center">
          <Typography className={classes.title} gutterBottom variant="h5">
            {websiteLink.title}
          </Typography>
        </Box>
        <Box align="center">
          <Typography className={classes.tagline} gutterBottom variant="h6">
            {websiteLink.tagline}
          </Typography>
        </Box>

        <Box
          pt={1}
          display="flex"
          flexWrap="wrap"
          alignItems="stretch"
          justifyContent="center"
        >
          <Box p={1} className={classes.textPage}>
            {websiteLink.description.map((item) => (
              <Typography
                className={classes.description}
                variant="body2"
                gutterBottom
                key={item}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box p={1}>
            <YouTube className={classes.video} video={websiteLink.video} />
          </Box>
        </Box>

        <Box
          pt={1}
          display="flex"
          flexWrap="wrap"
          alignItems="stretch"
          justifyContent="center"
        >
          {websiteLink.screenshots.map((item) => (
            <Box p={1} key={item.toString()}>
              <img
                className={classes.images}
                src={item}
                alt={item.toString()}
              ></img>
            </Box>
          ))}
        </Box>

        <Box
          pt={2}
          pb={3}
          display="flex"
          flexWrap="wrap"
          alignItems="stretch"
          justifyContent="center"
        >
          <Box p={1}>
            <Button
              target="_blank"
              href={websiteLink.linkPrimary}
              variant="outlined"
              size="large"
              color="primary"
            >
              Download
            </Button>
          </Box>
          <Box p={1}>
            <Button
              target="_blank"
              href={websiteLink.linkSecondary}
              variant="outlined"
              size="large"
              color="primary"
            >
              Itch.io Page
            </Button>
          </Box>
          <Box p={1}>
            <Button
              href="/games"
              variant="outlined"
              size="large"
              color="primary"
            >
              Return
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export { GamePage };
export default GamePage;
