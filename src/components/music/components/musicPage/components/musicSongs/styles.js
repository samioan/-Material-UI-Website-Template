import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  song: {
    border: "none",
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: { width: 500 },
    height: 42,
  },
}));

export { styles };
export default styles;
