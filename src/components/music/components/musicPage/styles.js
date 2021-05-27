import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  page: {
    [breakpoints.down("sm")]: { width: "100vw" },
    [breakpoints.up("sm")]: { width: 800 },
    minHeight: "100vh",
    margin: "auto",
    backgroundColor: palette.text.primary,
  },
  content: {
    [breakpoints.down("sm")]: {
      width: "calc(100vw - 32px)",
      textAlign: "center",
    },
    [breakpoints.up("sm")]: { width: 347, textAlign: "left" },
    height: "100%",
  },
  video: {
    [breakpoints.down("sm")]: { width: "calc(100vw - 32px)" },
    [breakpoints.up("sm")]: { width: 347 },
    height: 196,
  },
  song: {
    border: "none",
    [breakpoints.down("sm")]: { width: "calc(100vw - 32px)" },
    [breakpoints.up("sm")]: { width: 500 },
    height: 42,
  },
  button: {
    width: 150,
  },
  title: {
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
