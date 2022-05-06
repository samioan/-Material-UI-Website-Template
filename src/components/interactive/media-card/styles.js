import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
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
  },
  cardContent: {
    minHeight: 140,
  },
  title: {
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  tagline: {
    color: palette.grey[500],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  genre: {
    color: palette.grey[600],
    borderColor: palette.grey[600],
    fontFamily: "Lucida Console, Courier New, monospace",
    cursor: "pointer",
  },
}));

export { styles };
export default styles;
