import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  page: {
    backgroundColor: palette.text.primary,
    minHeight: "100vh",
  },
}));

export { styles };
export default styles;
