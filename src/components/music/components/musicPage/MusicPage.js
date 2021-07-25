import React, { useEffect } from "react";

import styles from "./styles";
import albumDetails from "../../util/albumDetails";
import { useRouteMatch } from "react-router-dom";

import { MusicText, MusicSongs, MusicButtons } from "./components";
const musicPageDetails = (album) => {
  const link = album.split("/")[2];

  for (var i = 0; i < albumDetails.length; i++) {
    if (albumDetails[i].pageLink === link) {
      return albumDetails[i];
    }
  }
};

const MusicPage = () => {
  const classes = styles();
  let match = useRouteMatch();
  const websiteLink = musicPageDetails(match.url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page}>
      <MusicText link={websiteLink} />
      <MusicSongs link={websiteLink} />
      <MusicButtons link={websiteLink} />
    </div>
  );
};

export { MusicPage };
export default MusicPage;
