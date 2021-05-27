import albumMedia from "./albumMedia";
import albumDescriptions from "./albumDescriptions";
import albumLinks from "./albumLinks";
import albumCardItems from "./albumCardItems";
import albumCodes from "./albumCodes";

const albumDetails = [
  "udjat",
  "interfector",
  "anotherDemon",
  "facelessGruntsTortureTheInnermostPretenses",
  "theLeftHandPath",
  "aThousandThoughtsAndTheirPeacefulDecay",
  "emotionsForHire",
  "indulgence",
  "eternally",
].map((album) => ({
  title: albumCardItems[album][0],
  tagline: albumCardItems[album][1],
  genre: albumCardItems[album][2],
  description: albumDescriptions[album],
  linkPrimary: albumLinks[album][0],
  pageLink: albumLinks[album][1],
  image: albumMedia[album].splashImage,
  screenshots: albumMedia[album].screenshots,
  background: albumMedia[album].background,
  video: albumMedia[album].video,
  albumCodes: albumCodes[album],
}));

export { albumDetails };
export default albumDetails;
