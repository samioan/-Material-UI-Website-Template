import React from "react";
import Box from "@material-ui/core/Box";

import styles from "./styles";

const MusicSongs = ({ link }) => {
  const classes = styles();

  return (
    <Box
      pt={3}
      pb={3}
      display="flex"
      flexWrap="wrap"
      alignItems="stretch"
      justifyContent="center"
    >
      {link.albumCodes.trackCodes.map((item) => (
        <iframe
          className={classes.song}
          title={item}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${link.albumCodes.albumCode}/size=small/bgcol=333333/linkcol=0f91ff/artwork=none/track=${item}/transparent=true/`}
          seamless
        ></iframe>
      ))}
    </Box>
  );
};

export { MusicSongs };
export default MusicSongs;
