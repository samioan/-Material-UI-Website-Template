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

  media: {
    height: 400,
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
