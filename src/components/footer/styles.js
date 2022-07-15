import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  container: {
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
    minHeight: 48,
    [breakpoints.up("sm")]: {
      marginLeft: 16,
      justifyContent: "flex-start",
    },
  },
  tooltip: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
  },
  arrow: {
    color: "#333333",
  },
  iconButton: {
    color: "#FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
    "& svg": {
      width: 24,
      height: 24,
    },
  },
}));

export { styles };
export default styles;
