import TwitterIcon from "@material-ui/icons/Twitter";
import ArchiveIcon from "@material-ui/icons/Archive";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteIcon from "@material-ui/icons/Favorite";

const linkDetails = [
  {
    label: "Twitter",
    site: "https://twitter.com/theselfishdream",
    icon: <TwitterIcon />,
  },
  {
    label: "Instagram",
    site: "https://www.instagram.com/theselfishdream",
    icon: <InstagramIcon />,
  },
  {
    label: "Archive",
    site: "https://drive.google.com/drive/folders/15A5HKilu8HXCVH73yG2tE1_XhjRrTjzY?usp=share_link",
    icon: <ArchiveIcon />,
  },
  {
    label: "Donate",
    site: "https://paypal.me/SelfishDream?country.x=GR&locale.x=en_US",
    icon: <FavoriteIcon />,
  },
];

export { linkDetails };
export default linkDetails;
