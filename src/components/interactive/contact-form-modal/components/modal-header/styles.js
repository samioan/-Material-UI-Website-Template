import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  headerContainer: {
    padding: "24px 16px",
  },
  title: {
    color: palette.grey[50],
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  iconButton: {
    padding: 0,
  },
  icon: {
    color: palette.grey[50],
  },
  divider: {
    margin: "0 16px",
    backgroundColor: palette.grey[600],
  },
}));

export { styles };
export default styles;
