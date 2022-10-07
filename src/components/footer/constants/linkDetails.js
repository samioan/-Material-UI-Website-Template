import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const linkDetails = [
  {
    label: "Twitter",
    site: "https://twitter.com/theselfishdream",
    icon: <TwitterIcon />,
  },
  {
    label: "Instagram",
    site: "https://www.instagram.com/theselfishdream/",
    icon: <InstagramIcon />,
  },
  {
    label: "Support me on Ko-fi",
    site: "https://ko-fi.com/selfishdream",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"
        />
      </svg>
    ),
  },
];

export { linkDetails };
export default linkDetails;
