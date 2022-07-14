import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  container: {
    paddingTop: 80,
  },
  breadcrumbs: {
    marginBottom: 16,
    "& li": {
      fontSize: "0.8rem",
      color: "#FFFFFF",
    },
    "& p": {
      fontSize: "0.8rem",
      "&:hover": {
        color: "#FFFFFF",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
  },
  title: {
    color: "#FFFFFF",
  },
  tagline: {
    color: "#FFFFFF",
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
    color: "#FFFFFF",
  },
}));

export { styles };
export default styles;
