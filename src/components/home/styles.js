import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  page: {
    [breakpoints.down("sm")]: {
      width: "100vw",
    },
    [breakpoints.up("sm")]: {
      width: "60vw",
    },
    backgroundColor: palette.text.primary,
    margin: "auto",
    minHeight: "100vh",
  },
  title: {
    color: palette.grey[50],
  },
  subtitle: {
    color: "#f00",
  },
  gridList: {
    height: "100vh",
  },
  clickableIcon: {
    color: "rgba(255, 255, 255, 0.54)",
    "&:hover": {
      color: "rgba(255, 255, 255, 1)",
    },
  },
}));

export { styles };
export default styles;
