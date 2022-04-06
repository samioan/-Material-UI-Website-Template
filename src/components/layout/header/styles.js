import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  header: {
    backgroundColor: "#111",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    "&.MuiAppBar-positionFixed": {
      right: "auto",
      left: 0,
    },
  },
  logo: {
    fontFamily: "Lucida Console, Courier New, monospace",
    fontWeight: 600,
    color: "#fff",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Lucida Console, Courier New, monospace",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
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
