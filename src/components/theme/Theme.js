import { makeStyles } from "@material-ui/core/styles";

const theme = makeStyles(({ palette, breakpoints }) => ({
  page: {
    padding: 0,
    backgroundColor: palette.text.primary,
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
    padding: "16px 16px 80px 16px",
    [breakpoints.up("sm")]: {
      padding: "16px 16px 60px 16px",
    },
  },
}));

export { theme };
export default theme;
