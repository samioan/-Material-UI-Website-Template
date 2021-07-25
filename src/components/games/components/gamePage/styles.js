import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  page: {
    width: "100vw",
    [breakpoints.up("sm")]: { width: 800 },
    minHeight: "100vh",
    margin: "auto",
    backgroundColor: palette.text.primary,
  },

  button: {
    width: 150,
  },
}));

export { styles };
export default styles;
