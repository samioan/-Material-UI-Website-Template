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
  },
  content: {
    padding: "0 0 100px 0",
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
        "& p": {
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
  button: {
    margin: 8,
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: {
      width: 300,
    },
  },
}));

export { styles };
export default styles;
