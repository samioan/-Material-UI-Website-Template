import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  page: {
    backgroundColor: palette.text.primary,
  },
  title: {
    color: palette.grey[50],
    paddingTop: 80,
    paddingBottom: 40,
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  subtitle: {
    color: palette.grey[50],
    paddingBottom: 40,
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  innerSubtitle: {
    color: palette.grey[50],
    paddingTop: 40,
    paddingBottom: 40,
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  bottomContainer: {
    paddingBottom: 32,
  },
}));

export { styles };
export default styles;
