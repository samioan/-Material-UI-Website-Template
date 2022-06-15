import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette, breakpoints }) => ({
  card: {
    backgroundColor: "transparent",
    color: "transparent",
    boxShadow: "none",
  },
  mediaContainer: {
    overflow: "hidden",
    position: "relative",
    width: "100%",

    "&:hover": {
      "& div:first-child": {
        transform: "scale(1.1)",
      },
      "& div:last-child": {
        opacity: 1,
      },
    },
  },
  media: {
    height: 300,
    transition: "all .2s",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    transition: "all .2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  iconButton: {
    color: palette.grey[50],
    width: 32,
    height: 32,
  },
  icon: {
    width: 32,
    height: 32,
  },
  cardContent: {
    minHeight: 140,
    padding: "16px 0",
    textDecoration: "none",
    display: "inline-block",
  },
  title: {
    color: palette.grey[50],
  },
  tagline: {
    color: palette.grey[500],
  },
  genre: {
    color: palette.grey[600],
    borderColor: palette.grey[600],
    cursor: "pointer",
  },
  fullLink: {
    textDecoration: "none",
    width: "100%",
    height: "100%",
  },
  link: {
    textDecoration: "none",
  },
  artMediaContainer: {
    overflow: "hidden",
    cursor: "pointer",
  },
  artMedia: {
    height: 400,
    opacity: 1,
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.1)",
      opacity: 0.5,
    },
  },
  artCardContent: {
    padding: "16px 0",
  },
  artModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    outline: "none",
    "& img": {
      width: "100%",
    },
    [breakpoints.up("sm")]: {
      height: "75%",
      "& img": {
        width: "auto",
        height: "100%",
      },
    },
  },
  videoCardContent: {
    minHeight: 300,
    padding: 0,
  },
  videoTitle: {
    marginTop: 16,
    color: palette.grey[50],
  },
}));

export { styles };
export default styles;
