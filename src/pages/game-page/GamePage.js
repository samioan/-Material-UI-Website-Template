import React from "react";

import { MediaPage } from "components";

import { GameImageGallery } from "./components";
import withGamePage from "./withGamePage";

const GamePage = ({
  gamePageItems,
  currentPage,
  loadGameItems,
  gamePageError,
  gamePageLoading,
}) => (
  <MediaPage
    mediaPageItems={gamePageItems}
    currentPage={currentPage}
    loading={gamePageLoading}
    error={gamePageError}
    loadPageItems={loadGameItems}
    mainComponent={<GameImageGallery pageItem={gamePageItems} />}
  />
);

export { GamePage };
export default withGamePage(GamePage);
