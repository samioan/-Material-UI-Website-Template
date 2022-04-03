import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import withMusicPageLink from "./withMusicPageLink";
import { MusicText, MusicSongs, MusicButtons } from "./components";

import withScrollbars from "components/theme/withScrollbars";

const MusicPage = ({ websiteLink, classes }) => (
  <Container maxWidth="md" className={classes.page}>
    <MusicText link={websiteLink} />
    <MusicSongs link={websiteLink} />
    <MusicButtons link={websiteLink} />
  </Container>
);

export { MusicPage };

export default compose(
  withStyles(styles),
  withScrollbars,
  withMusicPageLink
)(MusicPage);
