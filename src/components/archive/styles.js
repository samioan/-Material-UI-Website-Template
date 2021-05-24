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
  root: {
    color: palette.grey[50],
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "90%",
    height: "100%",
  },
}));

export { styles };
export default styles;
