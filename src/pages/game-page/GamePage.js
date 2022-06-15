import React from "react";

import MediaPage from "components/layout/media-page";

import { GameImageGallery } from "./components";
import withGamePageProps from "./withGamePageProps";

const GamePage = ({ gamePageItems, currentPage }) => (
  <MediaPage
    mediaPageItems={gamePageItems}
    currentPage={currentPage}
    mainComponent={<GameImageGallery pageItem={gamePageItems} />}
  />
);

export { GamePage };
export default withGamePageProps(GamePage);
