import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  appContainer: {
    minHeight: "100vh",
    backgroundColor: "#111",
    backgroundImage: `url(https://f4.bcbits.com/img/0021371731_130.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
}));

export { styles };
export default styles;
