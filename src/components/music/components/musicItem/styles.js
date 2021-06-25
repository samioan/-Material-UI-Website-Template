import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  title: {
    color: palette.grey[50],
  },
  tagline: {
    color: palette.grey[500],
  },
  genre: {
    color: palette.grey[600],
  },
  card: {
    backgroundColor: "#111",
  },
  cardContent: {
    width: "calc(100vw - 96px)",
    [breakpoints.up("sm")]: { width: 300 },
    minHeight: 140,
  },
  media: {
    height: 300,
  },
}));

export { styles };
export default styles;
