import { makeStyles } from "@material-ui/core/styles";

const Theme = makeStyles(({ breakpoints, palette }) => ({
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
    paddingTop: 80,
    color: palette.grey[50],
  },
  subtitle: {
    paddingTop: 40,
    paddingBottom: 40,
    color: palette.grey[50],
  },
  content: {
    padding: 16,
  },
}));

export { Theme };
export default Theme;
