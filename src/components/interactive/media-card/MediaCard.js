import React from "react";

import { ArtView, GameView, MusicView, VideoView } from "./components";

const MediaCard = ({
  image,
  title,
  tagline,
  genre,
  pageLink,
  downloadLink,
  itchioLink,
  currentPage,
  link,
}) => (
  <>
    {currentPage === "games" && (
      <GameView
        image={image}
        title={title}
        tagline={tagline}
        genre={genre}
        pageLink={pageLink}
        downloadLink={downloadLink}
        itchioLink={itchioLink}
        currentPage={currentPage}
      />
    )}
    {currentPage === "music" && (
      <MusicView
        image={image}
        title={title}
        tagline={tagline}
        genre={genre}
        pageLink={pageLink}
        downloadLink={downloadLink}
        itchioLink={itchioLink}
        currentPage={currentPage}
      />
    )}
    {currentPage === "art" && <ArtView image={image} title={title} />}
    {currentPage === "videos" && <VideoView link={link} title={title} />}
  </>
);

export { MediaCard };
export default MediaCard;
