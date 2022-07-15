import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  menuButton: {
    fontWeight: 700,
    size: 18,
    marginLeft: 38,
    color: "inherit",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
  },
}));

export { styles };
export default styles;
