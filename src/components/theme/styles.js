import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  page: {
    padding: 0,
    backgroundColor: palette.text.primary,
  },
  title: {
    paddingTop: 80,
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  subtitle: {
    paddingTop: 40,
    paddingBottom: 40,
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  content: {
    padding: 16,
  },
}));

export { styles };
export default styles;
