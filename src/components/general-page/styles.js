import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  page: {
    padding: 0,
    backgroundColor: "#000",
    minHeight: "calc(100vh - 64px)",
    maxWidth: "1280px",
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    margin: "auto",
    position: "relative",
  },
  title: {
    paddingTop: 80,
    color: "#FFFFFF",
  },
  content: {
    padding: 16,
  },
  loading: {
    position: "absolute",
    top: " 50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  loadingIcon: {
    color: "#FFF",
  },
  videoTitle: {
    paddingTop: 40,
    paddingBottom: 40,
    color: "#FFFFFF",
  },
}));

export { styles };
export default styles;
