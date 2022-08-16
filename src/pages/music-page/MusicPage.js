import React, { useCallback } from "react";

import { MediaPage } from "components";

import { MusicSongs } from "./components";
import withMusicPage from "./withMusicPage";

const MusicPage = ({
  musicPageItems,
  currentPage,
  isLoading,
  hasError,
  fetchData,
  loadMusicPageItems,
  paramsTitle,
}) => (
  <MediaPage
    mediaPageItems={musicPageItems}
    currentPage={currentPage}
    loading={isLoading}
    error={hasError}
    loadPageItems={useCallback(
      () =>
        fetchData("music", (data) =>
          loadMusicPageItems(data.find(({ links }) => links[0] === paramsTitle))
        ),
      [fetchData, loadMusicPageItems, paramsTitle]
    )}
    mainComponent={<MusicSongs pageItem={musicPageItems} />}
  />
);

export { MusicPage };
export default withMusicPage(MusicPage);
