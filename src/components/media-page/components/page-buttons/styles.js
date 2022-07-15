import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  buttonsContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  button: {
    margin: 8,
    width: 200,
    color: "#FFFFFF",
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
