import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  gridList: {
    margin: "auto",
    paddingLeft: 16,
    paddingRight: 16,
  },
  images: {
    position: "relative",
    left: "50%",
    height: "100%",
    transform: "translateX(-50%)",
    [breakpoints.up("xs")]: {
      left: 0,
      top: "50%",
      width: "100%",
      height: "auto",
      transform: "translateY(-50%)",
    },
  },
}));

export { styles };
export default styles;
