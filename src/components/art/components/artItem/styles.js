import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  title: {
    color: palette.grey[50],
  },
  card: {
    backgroundColor: "#111",
  },
  cardContent: {
    [breakpoints.down("sm")]: { width: "calc(100vw - 96px)" },
    [breakpoints.up("sm")]: { width: 300 },
  },
  media: {
    height: 400,
  },
}));

export { styles };
export default styles;
