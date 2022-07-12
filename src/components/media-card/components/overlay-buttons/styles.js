import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    transition: "all .2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  fullLink: {
    textDecoration: "none",
    width: "100%",
    height: "100%",
  },
}));

export { styles };
export default styles;
