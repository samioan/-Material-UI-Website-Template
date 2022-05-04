import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  card: {
    backgroundColor: "transparent",
  },
  cardContent: {
    minHeight: 300,
    padding: 0,
  },
  title: {
    marginTop: 16,
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
}));

export { styles };
export default styles;
