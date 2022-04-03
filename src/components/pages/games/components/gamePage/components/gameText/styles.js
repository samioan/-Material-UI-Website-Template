import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  contentContainer: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
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
  },
  tagline: {
    color: palette.grey[500],
  },
  description: {
    color: palette.grey[50],
  },
}));

export { styles };
export default styles;
