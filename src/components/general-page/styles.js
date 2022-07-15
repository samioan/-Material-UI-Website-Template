import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  page: {
    padding: 0,
    backgroundColor: "#000",
    minHeight: "calc(100vh - 48px)",
    maxWidth: "1280px",
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    margin: "auto",
  },
  title: {
    paddingTop: 80,
    color: "#FFFFFF",
  },
  content: {
    padding: 16,
  },
}));

export { styles };
export default styles;
