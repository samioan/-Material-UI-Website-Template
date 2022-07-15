const styles = () => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "calc(100vw - 32px)",
    width: "calc(100vw - 32px)",
    borderRadius: 8,
    position: "relative",
    outline: "none",
    maxWidth: 600,
    maxHeight: 600,
    backgroundColor: "#000000",
    marginLeft: 16,
    marginRight: 16,
  },
  image: {
    borderRadius: 8,
  },
  loading: {
    height: "calc(100vw - 32px)",
    width: "calc(100vw - 32px)",
    maxWidth: "inherit",
    maxHeight: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: "24px 16px",
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    color: "#FFFFFF",
  },
  iconButton: {
    padding: 0,
    color: "#FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
  },
});

export { styles };
export default styles;
