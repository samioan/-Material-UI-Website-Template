import React from "react";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import { compose } from "redux";

import { MusicText, MusicSongs, MusicButtons } from "./components";

import withMusicPageLink from "./withMusicPageLink";
import withScrollbars from "../../../theme/withScrollbars";

import styles from "./styles";

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
