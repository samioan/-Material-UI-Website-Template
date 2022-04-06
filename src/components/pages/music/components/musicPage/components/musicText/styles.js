import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  contentContainer: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  textContainer: {
    paddingBottom: 8,
    textAlign: "center",
    [breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  video: {
    width: "100%",
    height: 210,
  },
  title: {
    paddingTop: 80,
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  tagline: {
    color: palette.grey[500],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  description: {
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
}));

export { styles };
export default styles;
