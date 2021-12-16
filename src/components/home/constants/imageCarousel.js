import gameData from "../../data/gameData.json";

const imagesCarousel = Object.values(gameData).map((item) => ({
  key: item.title,
  name: item.title,
  img: item.splashImage,
}));

export { imagesCarousel };
export default imagesCarousel;
