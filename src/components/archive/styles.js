import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette, breakpoints }) => ({
  page: {
    backgroundColor: palette.text.primary,
    padding: "0px 0px 160px 0px",
    [breakpoints.up("sm")]: {
      padding: "0px 0px 120px 0px",
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
