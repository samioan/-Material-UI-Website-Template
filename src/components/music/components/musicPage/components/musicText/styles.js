import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  contentContainer: {
    paddingTop: 8,
  },
  content: {
    margin: 8,
    width: "calc(100vw - 32px)",
    textAlign: "center",
    [breakpoints.up("sm")]: { width: 347, textAlign: "left" },
    height: "100%",
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
  video: {
    margin: 8,
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: { width: 347 },
    height: 196,
  },
}));

export { styles };
export default styles;
