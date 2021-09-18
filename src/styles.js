import { makeStyles } from "@material-ui/core/styles";

import background from "./background.jpg";

const styles = makeStyles(() => ({
  pageBackground: {
    minHeight: "100vh",
    backgroundColor: "black",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
}));

export { styles };
export default styles;
