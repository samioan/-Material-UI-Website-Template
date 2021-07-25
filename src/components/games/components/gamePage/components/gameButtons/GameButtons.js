import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import styles from "./styles";

const GameButtons = ({ link }) => {
  const classes = styles();

  return (
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
          className={classes.button}
          target="_blank"
          href={link.linkPrimary}
          variant="outlined"
          size="large"
          color="primary"
        >
          Download
        </Button>
      </Box>
      <Box p={1}>
        <Button
          className={classes.button}
          target="_blank"
          href={link.linkSecondary}
          variant="outlined"
          size="large"
          color="primary"
        >
          Itch.io Page
        </Button>
      </Box>
      <Box p={1}>
        <Button
          className={classes.button}
          href="/games"
          variant="outlined"
          size="large"
          color="primary"
        >
          Return
        </Button>
      </Box>
    </Box>
  );
};

export { GameButtons };
export default GameButtons;
