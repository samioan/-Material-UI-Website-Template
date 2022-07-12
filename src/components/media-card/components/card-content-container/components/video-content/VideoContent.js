import React from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoContent = ({ link }) => (
  <LiteYouTubeEmbed
    activeClass="lyt-activated"
    iframeClass=""
    playerClass="lty-playbtn"
    wrapperClass="yt-lite"
    poster="hqdefault"
    noCookie
    id={link}
  />
);

export { VideoContent };
export default VideoContent;
