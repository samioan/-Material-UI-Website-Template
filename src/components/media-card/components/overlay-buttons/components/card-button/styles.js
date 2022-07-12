import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
  iconButton: {
    color: palette.grey[50],
    width: 32,
    height: 32,
    "& svg": {
      width: 32,
      height: 32,
    },
  },
}));

export { styles };
export default styles;
