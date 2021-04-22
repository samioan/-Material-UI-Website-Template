import React, { useEffect } from "react";
import { GameItem } from "./components";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import gameDetails from "./util/gameDetails";

const useStyles = makeStyles({
  root: {
    color: "#fff",
  },
});

const Games = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Box pt={10}>
        <Typography className={classes.root} variant="h1" align="center">
          Games
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        p={2}
      >
        {gameDetails.map((gameItem) => (
          <Box key={gameItem.title} p={2}>
            <GameItem
              image={gameItem.image}
              title={gameItem.title}
              tagline={gameItem.tagline}
              genre={gameItem.genre}
              linkPrimary={gameItem.linkPrimary}
              linkSecondary={gameItem.linkSecondary}
              pageLink={gameItem.pageLink}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export { Games };
export default Games;
