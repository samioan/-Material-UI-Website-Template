import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  card: {
    backgroundColor: "transparent",
    color: "transparent",
    boxShadow: "none",
  },
  mediaContainer: {
    overflow: "hidden",
  },
  media: {
    height: 300,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
