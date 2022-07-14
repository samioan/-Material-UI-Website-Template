import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: "#000000",
    paddingRight: 79,
    paddingLeft: 0,
    [breakpoints.up("lg")]: {
      paddingLeft: 118,
    },
    "&.MuiAppBar-positionFixed": {
      right: "auto",
      left: 0,
    },
  },
}));

export { styles };
export default styles;
