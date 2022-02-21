import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  footerContainer: {
    display: "flex",
    flexWrap: "wrap",
    position: "fixed",
    bottom: 0,
    width: "calc(100% - 8px)",
    minHeight: 64,
    backgroundColor: "#111",
    justifyContent: "center",
    [breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  icon: {
    width: 32,
    height: 32,
  },
}));

export { styles };
export default styles;
