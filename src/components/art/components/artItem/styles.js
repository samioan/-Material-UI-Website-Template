import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  title: {
    color: palette.grey[50],
  },
  card: {
    backgroundColor: "#111",
  },

  media: {
    height: 400,
  },
}));

export { styles };
export default styles;
