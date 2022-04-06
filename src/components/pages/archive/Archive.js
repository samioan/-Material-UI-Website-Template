import React from "react";
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
import ScrollToTopButton from "components/input/scroll-to-top-button";

const Archive = ({ showScrollToTopButton, scrollToTop }) => {
  const classes = styles();

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

        <div className={classes.bottomContainer}>
          <ArchiveList archiveDetailsArray={archiveArtDetails} />
        </div>
      </Container>
      {showScrollToTopButton && <ScrollToTopButton onClick={scrollToTop} />}
      <Footer />
    </>
  );
};
export { Archive };
export default withScrollbars(Archive);
