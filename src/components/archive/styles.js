import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  page: {
    width: "100vw",
    backgroundColor: palette.text.primary,
    margin: "auto",
    minHeight: "100vh",
    [breakpoints.up("sm")]: {
      width: "60vw",
    },
  },
  title: {
    color: palette.grey[50],
    paddingTop: 80,
    paddingBottom: 40,
  },
  subtitle: {
    color: palette.grey[50],
    paddingBottom: 40,
  },
  innerSubtitle: {
    color: palette.grey[50],
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

export { styles };
export default styles;
