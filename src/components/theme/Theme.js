import { makeStyles } from "@material-ui/core/styles";

const Theme = makeStyles(({ breakpoints, palette }) => ({
  page: {
    width: "100vw",
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
}));

export { Theme };
export default Theme;
