import musicData from "../../data/musicData.json";

const albumDetails = Object.values(musicData).map((album) => ({
  title: album.title,
  tagline: album.subtitle,
  genre: album.genre,
  description: album.description,
  linkPrimary: album.links[0],
  pageLink: album.links[1],
  image: album.splashImage,
  video: album.video,
  albumCode: album.albumCode,
  trackCodes: album.trackCodes,
}));

export { albumDetails };
export default albumDetails;
