import React from "react";

import { GeneralPage } from "components";

import withMusicProps from "./withMusicProps";

const Music = ({
  onLoadMoreAlbums,
  albumsShown,
  albumsOnPage,
  albumsTotal,
  currentPage,
}) => (
  <GeneralPage
    title="Music"
    itemsShown={albumsShown}
    itemsOnPage={albumsOnPage}
    itemsTotal={albumsTotal}
    loadMoreItems={onLoadMoreAlbums}
    currentPage={currentPage}
  />
);

export { Music };
export default withMusicProps(Music);
