import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  cardContent: {
    minHeight: 140,
    padding: "16px 0",
    textDecoration: "none",
    display: "inline-block",
    width: "100%",
  },
  artCardContent: {
    padding: "16px 0",
  },
  videoCardContent: {
    minHeight: 300,
    padding: 0,
  },
  videoTitle: {
    marginTop: 16,
    color: palette.grey[50],
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
}));

export { styles };
export default styles;
