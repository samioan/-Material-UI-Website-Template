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
      <Box mt={10}>
        <Typography
          className={classes.root}
          variant="h1"
          align="center"
          color="#fff"
          component="h1"
        >
          Games
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
        m={2}
      >
        {gameDetails.map((gameItem) => (
          <Box key={gameItem.title} p={2}>
            <GameItem
              image={gameItem.image}
              title={gameItem.title}
              tagline={gameItem.tagline}
              genre={gameItem.genre}
              description={gameItem.description.map((item) => (
                <div key={item}>{item}</div>
              ))}
              linkPrimary={gameItem.linkPrimary}
              linkSecondary={gameItem.linkSecondary}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export { Games };
export default Games;
