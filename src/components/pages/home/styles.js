import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  page: {
    padding: 0,
    backgroundColor: palette.text.primary,
    minHeight: "100vh",
  },
  title: {
    color: palette.grey[50],
    paddingTop: 80,
    fontFamily: "Lucida Console, Courier New, monospace",
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
            borderRadius: 20,
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
