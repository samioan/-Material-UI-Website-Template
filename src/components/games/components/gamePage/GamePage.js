import React from "react";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import { compose } from "redux";

import { GameText, GameImageGallery, GameButtons } from "./components/";

import withScrollbars from "../../../theme/withScrollbars";
import withGamePageLink from "./withGamePageLink";

import styles from "./styles";

const GamePage = ({ websiteLink, classes }) => (
  <Container maxWidth="md" className={classes.page}>
    <GameText link={websiteLink} />
    <GameImageGallery link={websiteLink} />
    <GameButtons link={websiteLink} />
  </Container>
);

export { GamePage };
export default compose(
  withStyles(styles),
  withScrollbars,
  withGamePageLink
)(GamePage);
