import React from "react";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";

const MusicSongs = ({ pageItem, classes }) => (
  <Container maxWidth="sm" className={classes.songContainer}>
    {pageItem.trackCodes.map((item) => (
      <iframe
        className={classes.song}
        title={item}
        key={item}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${pageItem.albumCode}/size=small/bgcol=333333/linkcol=0f91ff/artwork=none/track=${item}/transparent=true/`}
        seamless
      ></iframe>
    ))}
  </Container>
);

export { MusicSongs };
export default withStyles(styles)(MusicSongs);
