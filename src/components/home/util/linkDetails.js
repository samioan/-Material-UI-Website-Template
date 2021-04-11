import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AlbumIcon from "@material-ui/icons/Album";

import bandcamp from "../images/bandcamp.jpg";
import instagram from "../images/instagram.jpg";
import itchio from "../images/itchio.jpg";
import soundcloud from "../images/soundcloud.jpg";
import twitter from "../images/twitter.jpg";
import youtube from "../images/youtube.jpg";

const linkDetails = [
  {
    title: "Itch.io",
    site: "https://selfishdream.itch.io/",
    icon: <SportsEsportsIcon />,
    img: itchio,
  },
  {
    title: "SoundCloud",
    site: "https://soundcloud.com/selfishdream",
    icon: <MusicNoteIcon />,
    img: soundcloud,
  },
  {
    title: "Bandcamp",
    site: "https://selfishdream.bandcamp.com/",
    icon: <AlbumIcon />,
    img: bandcamp,
  },
  {
    title: "Instagram",
    site: "https://www.instagram.com/theselfishdream/",
    icon: <InstagramIcon />,
    img: instagram,
  },
  {
    title: "YouTube",
    site: "https://www.youtube.com/channel/UCPvWrxJnZXkp4F8MXAo0gUQ",
    icon: <YouTubeIcon />,
    img: youtube,
  },
  {
    title: "Twitter",
    site: "https://twitter.com/theselfishdream",
    icon: <TwitterIcon />,
    img: twitter,
  },
];

export { linkDetails };
export default linkDetails;
