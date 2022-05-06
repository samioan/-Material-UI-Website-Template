import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  gridList: {
    margin: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    "& .MuiGridList-root": {
      justifyContent: "center",
    },
  },
  gridTitle: {
    fontFamily: "Lucida Console, Courier New, monospace",
  },
  image: {
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
      transition: "all .2s",
      "&:hover": {
        opacity: 0.5,
      },
    },
  },
  loading: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export { styles };
export default styles;
