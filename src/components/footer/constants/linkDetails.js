import TwitterIcon from "@material-ui/icons/Twitter";
import ArchiveIcon from "@material-ui/icons/Archive";
import InstagramIcon from "@material-ui/icons/Instagram";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const linkDetails = [
  {
    label: "Twitter",
    site: "https://linktr.ee/selfishdream",
    icon: <TwitterIcon />,
  },
  {
    label: "Instagram",
    site: "https://www.instagram.com/theselfishdream/",
    icon: <InstagramIcon />,
  },
  {
    label: "Archive",
    site: "https://drive.google.com/drive/folders/15A5HKilu8HXCVH73yG2tE1_XhjRrTjzY?usp=share_link",
    icon: <ArchiveIcon />,
  },
  {
    label: "Support me on Ko-fi",
    site: "https://ko-fi.com/selfishdream",
    icon: <MonetizationOnIcon />,
  },
];

export { linkDetails };
export default linkDetails;
