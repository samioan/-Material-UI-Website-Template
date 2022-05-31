import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    backgroundColor: "#000",
    borderRadius: 8,
    maxWidth: 600,
  },
}));

export { styles };
export default styles;
