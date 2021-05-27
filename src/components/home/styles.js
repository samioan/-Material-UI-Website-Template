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
  gridList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  carousel: {
    margin: "auto",
    paddingBottom: 40,
    [breakpoints.down("sm")]: {
      width: "calc(100vw - 32px)",
    },
    [breakpoints.up("sm")]: {
      width: "45vw",
    },
  },
  button: {
    [breakpoints.down("sm")]: {
      width: "calc(100vw - 32px)",
    },
    [breakpoints.up("sm")]: {
      width: 300,
    },
  },
}));

export { styles };
export default styles;
