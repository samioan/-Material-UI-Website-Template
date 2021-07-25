import { makeStyles } from "@material-ui/core/styles";

import background from "./background.jpg";

const styles = makeStyles(({ breakpoints, palette }) => ({
  pageBackground: {
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
