import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  menuItem: {
    color: "#fff",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
  },
}));

export { styles };
export default styles;
