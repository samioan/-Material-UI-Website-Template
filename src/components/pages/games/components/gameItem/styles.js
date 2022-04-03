import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
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
    minHeight: 140,
  },
  media: {
    height: 300,
  },
}));

export { styles };
export default styles;
