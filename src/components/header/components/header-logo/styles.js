import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  logo: {
    fontWeight: 600,
    color: "#fff",
    textAlign: "left",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
  },
}));

export { styles };
export default styles;
