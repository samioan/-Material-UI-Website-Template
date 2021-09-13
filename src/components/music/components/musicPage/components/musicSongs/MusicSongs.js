import React from "react";
import Grid from "@material-ui/core/Grid";

import styles from "./styles";

const MusicSongs = ({ link }) => {
  const classes = styles();

  return (
    <Grid className={classes.songContainer} container justify="center">
      {link.albumCodes.trackCodes.map((item) => (
        <iframe
          className={classes.song}
          title={item}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${link.albumCodes.albumCode}/size=small/bgcol=333333/linkcol=0f91ff/artwork=none/track=${item}/transparent=true/`}
          seamless
        ></iframe>
      ))}
    </Grid>
  );
};

export { MusicSongs };
export default MusicSongs;
