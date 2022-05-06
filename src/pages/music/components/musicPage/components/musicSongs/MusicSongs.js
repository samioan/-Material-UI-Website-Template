import React from "react";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const MusicSongs = ({ link, classes }) => (
  <Container maxWidth="sm" className={classes.songContainer}>
    {link.trackCodes.map((item) => (
      <iframe
        className={classes.song}
        title={item}
        key={item}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${link.albumCode}/size=small/bgcol=333333/linkcol=0f91ff/artwork=none/track=${item}/transparent=true/`}
        seamless
      ></iframe>
    ))}
  </Container>
);

export { MusicSongs };
export default withStyles(styles)(MusicSongs);
