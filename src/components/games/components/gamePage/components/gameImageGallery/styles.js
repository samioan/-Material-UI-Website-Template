import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ breakpoints, palette }) => ({
  images: {
    width: "calc(100vw - 32px)",
    [breakpoints.up("sm")]: { width: 347 },
    margin: "auto",
  },
}));

export { styles };
export default styles;
