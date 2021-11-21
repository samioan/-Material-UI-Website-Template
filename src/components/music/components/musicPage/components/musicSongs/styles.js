import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  songContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  song: {
    border: "none",
    width: "100%",
    height: 42,
  },
}));

export { styles };
export default styles;
