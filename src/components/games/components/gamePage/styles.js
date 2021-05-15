import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  page: {
    backgroundColor: "#000",
    maxWidth: 800,
    minWidth: "20%",
    margin: "auto",
    minHeight: "100vh",
  },
  textPage: {
    maxWidth: 347,
    minWidth: 347,
  },
  video: {
    minWidth: 347,
    minHeight: "100%",
    maxWidth: 347,
    maxHeight: "100%",
  },
  images: {
    minWidth: 347,
    minHeight: "100%",
    maxWidth: 347,
    maxHeight: "100%",
    margin: "auto",
  },
  title: {
    color: "#fff",
  },
  tagline: {
    color: "#606060",
  },
  description: {
    color: "#c3c3c3",
  },
});

export { styles };
export default styles;
