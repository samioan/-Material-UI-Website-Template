import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { MusicText, MusicSongs, MusicButtons } from "./components";
import albumDetails from "../../constants/albumDetails";

import { Scrollbars } from "react-custom-scrollbars";

import styles from "./styles";

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
        <MusicText link={websiteLink} />
        <MusicSongs link={websiteLink} />
        <MusicButtons link={websiteLink} />
      </Container>
    </Scrollbars>
  );
};

export { MusicPage };
export default MusicPage;
