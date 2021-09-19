import { makeStyles } from "@material-ui/core/styles";

const Theme = makeStyles(({ palette }) => ({
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
    padding: 16,
  },
}));

export { Theme };
export default Theme;
