import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import gameDetails from "../../constants/gameDetails";
import { GameText, GameImageGallery, GameButtons } from "./components/";

import { Scrollbars } from "react-custom-scrollbars";

import styles from "./styles";

const GamePage = () => {
  const gamePageDetails = (game) => {
    const link = game.split("/")[2];

    for (var i = 0; i < gameDetails.length; i++) {
      if (gameDetails[i].pageLink === link) {
        return gameDetails[i];
      }
    }
  };

  const classes = styles();
  let match = useRouteMatch();
  const websiteLink = gamePageDetails(match.url);

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
      <Container maxWidth="md" className={classes.page}>
        <GameText link={websiteLink} />
        <GameImageGallery link={websiteLink} />
        <GameButtons link={websiteLink} />
      </Container>
    </Scrollbars>
  );
};

export { GamePage };
export default GamePage;
