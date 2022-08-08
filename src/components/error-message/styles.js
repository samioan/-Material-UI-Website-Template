import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  errorContainer: {
    position: "absolute",
    top: " 50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  errorText: {
    color: "#FFF",
    marginBottom: 16,
  },
  errorButton: {
    margin: 8,
    width: 200,
    color: "#FFFFFF",
    backgroundColor: "#000000",
    border: "1px solid #FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      borderColor: "#888888",
      color: "#888888",
    },
  },
}));

export { styles };
export default styles;
