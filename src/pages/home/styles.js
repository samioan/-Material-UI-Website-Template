import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  page: {
    padding: 0,
    backgroundColor: "#000000",
    minHeight: "calc(100vh - 64px)",
  },
  title: {
    color: "#FFFFFF",
    paddingTop: 80,
  },
  content: {
    padding: 0,
    [breakpoints.up("md")]: {
      padding: "0px 16px",
    },
  },
  carousel: {
    padding: 16,
    height: 200,
    [breakpoints.up("md")]: {
      padding: "32px 16px",
      margin: 0,
      height: "70vh",
    },
    "& li": {
      height: 200,
      opacity: 1,
      transition: "all .2s",
      "&:hover": {
        transform: "scale(1.1)",
        opacity: 0.5,
      },
      [breakpoints.up("md")]: {
        height: "70vh",
      },
      "& a": {
        height: "100%",
        width: "100%",
        "& div": {
          margin: 0,
          height: "100%",
          width: "100%",
          "& img": {
            borderRadius: 16,
            height: "100%",
            width: "100%",
            objectFit: "cover",
          },
        },
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
