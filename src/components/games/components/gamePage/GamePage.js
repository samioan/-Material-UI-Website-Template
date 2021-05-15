import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import gameDetails from "../../util/gameDetails";
import { useRouteMatch } from "react-router-dom";
import YouTube from "@u-wave/react-youtube";
import Button from "@material-ui/core/Button";

const gamePageDetails = (game) => {
  const link = game.split("/")[2];

  for (var i = 0; i < gameDetails.length; i++) {
    if (gameDetails[i].pageLink === link) {
      return gameDetails[i];
    }
  }
};

const GamePage = () => {
  const classes = styles();
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
                align="center"
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
