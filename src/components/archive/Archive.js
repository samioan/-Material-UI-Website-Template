import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import ArchiveList from "./components/archiveList/ArchiveList";

import {
  archiveGameDetails,
  archiveMusicDetails,
  archiveArtDetails,
} from "./constants";

import placeholderGif from "./images/placeholder";

import styles from "./styles";

const Archive = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Archive
      </Typography>

      <Typography className={classes.subtitle} variant="h5" align="center">
        Games
      </Typography>

      <ArchiveList
        archiveDetailsArray={archiveGameDetails}
        image={placeholderGif}
      />

      <Typography className={classes.innerSubtitle} variant="h5" align="center">
        Music
      </Typography>

      <ArchiveList
        archiveDetailsArray={archiveMusicDetails}
        image={placeholderGif}
      />

      <Typography className={classes.innerSubtitle} variant="h5" align="center">
        Art
      </Typography>

      <ArchiveList
        archiveDetailsArray={archiveArtDetails}
        image={placeholderGif}
      />
    </Container>
  );
};
export { Archive };
export default Archive;
