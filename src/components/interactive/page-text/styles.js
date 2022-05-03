import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    paddingTop: 80,
  },
  breadcrumbs: {
    marginBottom: 16,
    "& li": {
      fontSize: "0.8rem",
      color: palette.grey[600],
    },
    "& p": {
      fontSize: "0.8rem",
      "&:hover": {
        color: palette.grey[600],
      },
    },
  },
  link: {
    textDecoration: "none",
    color: palette.grey[600],
    fontFamily: "Lucida Console, Courier New, monospace",
    "&:hover": {
      color: palette.grey[50],
    },
  },
  title: {
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  tagline: {
    color: palette.grey[500],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
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
  description: {
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  video: {
    width: "100%",
    height: 210,
  },
}));

export { styles };
export default styles;
