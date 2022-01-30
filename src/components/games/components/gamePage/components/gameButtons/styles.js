import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  buttonsContainer: {
    paddingTop: 16,
    paddingBottom: 140,
    [breakpoints.up("sm")]: {
      paddingBottom: 80,
    },
  },
  button: {
    margin: 8,
    width: 150,
  },
}));

export { styles };
export default styles;
