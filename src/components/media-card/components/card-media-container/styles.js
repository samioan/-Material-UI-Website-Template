import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  media: {
    height: 300,
    transition: "all .2s",
  },
  artMedia: {
    height: 400,
    opacity: 1,
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.1)",
      opacity: 0.5,
    },
  },
}));

export { styles };
export default styles;
