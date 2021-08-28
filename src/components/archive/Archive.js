import React, { useEffect } from "react";
import styles from "./styles";

import archiveDetails from "./constants/archiveDetails";
import ArchiveList from "./components/archiveList/ArchiveList";
import Typography from "@material-ui/core/Typography";

import placeholderGif from "./images/placeholder";

const Archive = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <Typography className={classes.title} variant="h2" align="center">
        Archive
      </Typography>

      <Typography className={classes.subtitle} variant="h5" align="center">
        Games
      </Typography>

      <ArchiveList
        archiveDetailsArray={archiveDetails}
        genre="Games"
        image={placeholderGif}
      />

      <Typography className={classes.innerSubtitle} variant="h5" align="center">
        Music
      </Typography>

      <ArchiveList
        archiveDetailsArray={archiveDetails}
        genre="Music"
        image={placeholderGif}
      />

      <Typography className={classes.innerSubtitle} variant="h5" align="center">
        Art
      </Typography>

      <ArchiveList
        archiveDetailsArray={archiveDetails}
        genre="Art"
        image={placeholderGif}
      />
    </div>
  );
};
export { Archive };
export default Archive;
