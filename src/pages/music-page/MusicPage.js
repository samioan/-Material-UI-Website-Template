import React from "react";

import { MediaPage } from "components";

import { MusicSongs } from "./components";
import withMusicPage from "./withMusicPage";

const MusicPage = ({
  musicPageItems,
  currentPage,
  musicPageLoading,
  musicPageError,
  loadMusicItems,
}) => (
  <MediaPage
    mediaPageItems={musicPageItems}
    currentPage={currentPage}
    loading={musicPageLoading}
    error={musicPageError}
    loadPageItems={loadMusicItems}
    mainComponent={<MusicSongs pageItem={musicPageItems} />}
  />
);

export { MusicPage };
export default withMusicPage(MusicPage);
