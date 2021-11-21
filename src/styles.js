import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  pageBackground: {
    minHeight: "100vh",
    backgroundColor: "black",
    backgroundImage: `url(https://f4.bcbits.com/img/0021371731_130.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
}));

export { styles };
export default styles;
