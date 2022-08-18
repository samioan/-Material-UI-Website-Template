import React, { useCallback } from "react";

import { GeneralPage } from "components";

import withMusic from "./withMusic";

const Music = ({
  albumsShown,
  albumsOnPage,
  albumsTotal,
  currentPage,
  loadMoreAlbums,
  isLoading,
  hasError,
  fetchData,
  loadInitialAlbums,
}) => (
  <GeneralPage
    title="Music"
    itemsShown={albumsShown}
    itemsOnPage={albumsOnPage}
    itemsTotal={albumsTotal}
    currentPage={currentPage}
    loadMoreItems={loadMoreAlbums}
    error={hasError}
    loadInitialItems={useCallback(
      () => fetchData("music", (data) => loadInitialAlbums(data)),
      [fetchData, loadInitialAlbums]
    )}
    loading={isLoading}
  />
);

export { Music };
export default withMusic(Music);
