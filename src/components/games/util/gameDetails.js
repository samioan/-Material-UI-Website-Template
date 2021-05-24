import gameMedia from "./gameMedia";
import gameDescriptions from "./gameDescriptions";
import gameLinks from "./gameLinks";
import gameCardItems from "./gameCardItems";

const gameDetails = [
  "within",
  "subminimal",
  "fateless",
  "vessel",
  "theFleshOfFallenAngels",
  "isntLifeDisappointing",
  "suffer",
  "soul",
  "suicide",
  "sheIsAllYours",
  "personal",
  "skin",
].map((game) => ({
  title: gameCardItems[game][0],
  tagline: gameCardItems[game][1],
  genre: gameCardItems[game][2],
  description: gameDescriptions[game],
  linkPrimary: gameLinks[game][0],
  linkSecondary: gameLinks[game][1],
  pageLink: gameLinks[game][2],
  image: gameMedia[game].splashImage,
  screenshots: gameMedia[game].screenshots,
  background: gameMedia[game].background,
  video: gameMedia[game].video,
}));

export { gameDetails };
export default gameDetails;
