import React from "react";

import { MediaPage } from "components";

import { MusicSongs } from "./components";
import withMusicPageProps from "./withMusicPageProps";

const MusicPage = ({ musicPageItems, currentPage }) => (
  <MediaPage
    mediaPageItems={musicPageItems}
    currentPage={currentPage}
    mainComponent={<MusicSongs pageItem={musicPageItems} />}
  />
);

export { MusicPage };
export default withMusicPageProps(MusicPage);
