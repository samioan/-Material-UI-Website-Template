import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  iconButton: {
    color: "inherit",
  },
  drawer: {
    "& .MuiDrawer-paperAnchorLeft": {
      backgroundColor: "#111",
    },
  },
  drawerContainer: {
    backgroundColor: "#111",
    padding: "20px 30px",
  },
}));

export { styles };
export default styles;
