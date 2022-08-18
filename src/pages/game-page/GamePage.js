import React, { useCallback } from "react";

import { MediaPage } from "components";

import { GameImageGallery } from "./components";
import withGamePage from "./withGamePage";

const GamePage = ({
  gamePageItems,
  currentPage,
  isLoading,
  hasError,
  fetchData,
  loadGamePageItems,
  paramsTitle,
}) => (
  <MediaPage
    mediaPageItems={gamePageItems}
    currentPage={currentPage}
    loading={isLoading}
    error={hasError}
    loadPageItems={useCallback(
      () =>
        fetchData("games", (data) =>
          loadGamePageItems(data.find(({ links }) => links[0] === paramsTitle))
        ),
      [fetchData, loadGamePageItems, paramsTitle]
    )}
    mainComponent={<GameImageGallery pageItem={gamePageItems} />}
  />
);

export { GamePage };
export default withGamePage(GamePage);
