import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ArchiveList from "./components/archiveList/ArchiveList";
import {
  archiveGameDetails,
  archiveMusicDetails,
  archiveArtDetails,
} from "./constants";
import styles from "./styles";

import Footer from "components/layout/footer";
import withScrollbars from "components/theme/withScrollbars";

const Archive = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.page}>
        <Typography className={classes.title} variant="h3" align="center">
          Archive
        </Typography>

        <Typography className={classes.subtitle} variant="h5" align="center">
          Games
        </Typography>

        <ArchiveList archiveDetailsArray={archiveGameDetails} />

        <Typography
          className={classes.innerSubtitle}
          variant="h5"
          align="center"
        >
          Music
        </Typography>

        <ArchiveList archiveDetailsArray={archiveMusicDetails} />

        <Typography
          className={classes.innerSubtitle}
          variant="h5"
          align="center"
        >
          Art
        </Typography>

        <ArchiveList archiveDetailsArray={archiveArtDetails} />
      </Container>
      <Footer />
    </>
  );
};
export { Archive };
export default withScrollbars(Archive);
