import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  label: {
    color: "#FFFFFF",
    paddingBottom: 40,
  },
  innerLabel: {
    color: "#FFFFFF",
    paddingTop: 40,
    paddingBottom: 40,
  },
  gridList: {
    margin: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    "& ul": {
      justifyContent: "center",
    },
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
  showMoreButtonContainer: {
    marginTop: 32,
  },
}));

export { styles };
export default styles;
