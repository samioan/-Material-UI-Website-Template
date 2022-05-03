import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import gameData from "data/gameData.json";

const gamePageDetails = (game) => {
  const link = game.split("/")[2];

  for (var i = 0; i < Object.values(gameData).length; i++) {
    if (Object.values(gameData)[i].links[2] === link) {
      return Object.values(gameData)[i];
    }
  }
};

const withGamePageLink = (Component) => (props) => {
  let match = useRouteMatch();
  const websiteLink = gamePageDetails(match.url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Component {...props} websiteLink={websiteLink} />;
};

export { withGamePageLink };
export default withGamePageLink;
