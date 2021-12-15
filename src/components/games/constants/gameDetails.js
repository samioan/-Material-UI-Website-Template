import gameData from "../../data/gameData.json";

const gameDetails = Object.values(gameData).map((game) => ({
  title: game.title,
  tagline: game.subtitle,
  genre: game.genre,
  description: game.description,
  linkPrimary: game.links[0],
  linkSecondary: game.links[1],
  pageLink: game.links[2],
  image: game.splashImage,
  screenshots: game.screenshots,
  video: game.video,
}));

export { gameDetails };
export default gameDetails;
