import React from "react";
import { compose } from "redux";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import withGamePageLink from "./withGamePageLink";
import { GameText, GameImageGallery, GameButtons } from "./components";

import withScrollbars from "components/theme/withScrollbars";

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
