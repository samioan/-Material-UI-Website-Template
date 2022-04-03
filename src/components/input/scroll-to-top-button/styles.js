import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  button: {
    height: 64,
    width: 64,
    position: "fixed",
    bottom: 32,
    left: "50vw",
  },
  icon: {
    height: 64,
    width: 64,
    color: "white",
  },
}));

export { styles };
export default styles;
