import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette, breakpoints }) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: 8,
    position: "relative",
    outline: "none",
    maxWidth: 700,
    width: "auto",
    maxHeight: 700,
    backgroundColor: "#111",
    height: "auto",
    [breakpoints.up("sm")]: {
      width: "100%",
      height: "75%",
    },
  },
  image: {
    width: "100%",
    borderRadius: 8,
    [breakpoints.up("sm")]: {
      width: "auto",
      height: "100%",
    },
  },
  loading: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: "24px 16px",
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    color: palette.grey[50],
  },
  iconButton: {
    padding: 0,
  },
  icon: {
    color: palette.grey[50],
  },
}));

export { styles };
export default styles;
