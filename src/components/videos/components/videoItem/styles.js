import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  title: {
    marginTop: 16,
    color: palette.grey[50],
  },
  card: {
    backgroundColor: "#111",
  },
  cardContent: {
    minHeight: 300,
  },
}));

export { styles };
export default styles;
