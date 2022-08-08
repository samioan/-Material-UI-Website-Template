import React from "react";

import { GeneralPage } from "components";

import withMusic from "./withMusic";

const Music = ({
  albumsShown,
  albumsOnPage,
  albumsTotal,
  currentPage,
  loadMoreAlbums,
  musicError,
  loadAlbums,
  musicLoading,
}) => (
  <GeneralPage
    title="Music"
    itemsShown={albumsShown}
    itemsOnPage={albumsOnPage}
    itemsTotal={albumsTotal}
    currentPage={currentPage}
    loadMoreItems={loadMoreAlbums}
    error={musicError}
    loadInitialItems={loadAlbums}
    loading={musicLoading}
  />
);

export { Music };
export default withMusic(Music);
