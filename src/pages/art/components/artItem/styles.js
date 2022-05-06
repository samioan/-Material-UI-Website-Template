import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette, breakpoints }) => ({
  title: {
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  card: {
    backgroundColor: "transparent",
    "&:hover": {
      cursor: "pointer",
    },
  },
  mediaContainer: {
    overflow: "hidden",
  },
  media: {
    height: 400,
    opacity: 1,
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.1)",
      opacity: 0.5,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    outline: "none",
    "& img": {
      width: "100%",
    },
    [breakpoints.up("sm")]: {
      height: "75%",
      "& img": {
        width: "auto",
        height: "100%",
      },
    },
  },
}));

export { styles };
export default styles;
