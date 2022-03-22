import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  footerContainer: {
    display: "flex",
    flexWrap: "wrap",
    position: "fixed",
    bottom: 0,
    width: "calc(100% - 8px)",
    backgroundColor: "#111",
    justifyContent: "center",
    zIndex: 2,
    [breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  icon: {
    width: 24,
    height: 24,
  },
}));

export { styles };
export default styles;
