import gameData from "data/gameData";
import musicData from "data/musicData";
import artDetails from "pages/art/util/artDetails";

const imagesCarousel = [
  Object.values(gameData).map((item) => ({
    key: item.title,
    name: `games-${item.title}`,
    img: item.carouselImage,
    link: item.links[0],
  })),
  Object.values(musicData).map((item) => ({
    key: item.title,
    name: `music-${item.title}`,
    img: item.cardImage,
    link: item.links[0],
  })),
  artDetails.map((item) => ({
    key: item.title,
    name: `art-${item.title}`,
    img: item.cardImage,
    link: " ",
  })),
];

export { imagesCarousel };
export default imagesCarousel;
