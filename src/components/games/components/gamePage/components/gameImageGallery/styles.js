import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints }) => ({
  gallery: {
    paddingTop: 8,
  },
  images: {
    padding: 8,
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: { width: 347 },
  },
}));

export { styles };
export default styles;
