import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  container: {
    backgroundColor: "#111",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  icon: {
    width: 24,
    height: 24,
  },
}));

export { styles };
export default styles;
