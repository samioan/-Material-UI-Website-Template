import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";

import musicData from "../../../data/musicData.json";

import { Scrollbars } from "react-custom-scrollbars";

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

  return (
    <Scrollbars
      style={{ height: "100vh" }}
      autoHide
      autoHideTimeout={1000}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
      )}
    >
      <Component {...props} websiteLink={websiteLink} />
    </Scrollbars>
  );
};

export { withMusicPageLink };
export default withMusicPageLink;
