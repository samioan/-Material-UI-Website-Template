import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import musicData from "data/musicData";

const musicPageDetails = (album) => {
  const link = album.split("/")[2];

  for (var i = 0; i < Object.values(musicData).length; i++) {
    if (Object.values(musicData)[i].links[1] === link) {
      return Object.values(musicData)[i];
    }
  }
};

const withMusicPageLink = (Component) => (props) => {
  let match = useRouteMatch();
  const websiteLink = musicPageDetails(match.url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Component {...props} websiteLink={websiteLink} />;
};

export { withMusicPageLink };
export default withMusicPageLink;
