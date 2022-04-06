import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
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
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  card: {
    backgroundColor: "#111",
  },
  cardContent: {
    minHeight: 140,
  },
  media: {
    height: 300,
  },
}));

export { styles };
export default styles;
