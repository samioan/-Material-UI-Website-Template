import gameData from "components/data/gameData";
import musicData from "components/data/musicData";
import artDetails from "components/pages/art/util/artDetails";

const imagesCarousel = [
  Object.values(gameData).map((item) => ({
    key: item.title,
    name: `games-${item.title}`,
    img: item.carouselImage,
    link: item.links[2],
  })),
  Object.values(musicData).map((item) => ({
    key: item.title,
    name: `music-${item.title}`,
    img: item.splashImage,
    link: item.links[1],
  })),
  artDetails.map((item) => ({
    key: item.title,
    name: `art-${item.title}`,
    img: item.image,
    link: " ",
  })),
];

export { imagesCarousel };
export default imagesCarousel;
