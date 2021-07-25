import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import styles from "./styles";

const MusicButtons = ({ link }) => {
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
          href="/music"
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

export { MusicButtons };
export default MusicButtons;
