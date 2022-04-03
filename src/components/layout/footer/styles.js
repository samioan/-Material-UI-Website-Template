import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: "#111",
    width: "calc(100% - 8px)",
  },
  icon: {
    width: 24,
    height: 24,
  },
}));

export { styles };
export default styles;
