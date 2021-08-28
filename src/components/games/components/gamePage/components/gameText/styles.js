import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  content: {
    width: "calc(100vw - 32px)",
    textAlign: "center",
    [breakpoints.up("sm")]: { width: 347, textAlign: "left" },
    height: "100%",
  },
  video: {
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: { width: 347 },
    height: 196,
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
