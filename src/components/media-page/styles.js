const styles = () => ({
  page: {
    backgroundColor: "#000",
    minHeight: "calc(100vh - 64px)",
    maxWidth: 928,
    margin: "auto",
    padding: "0 16px 0 16px",
    position: "relative",
  },
  error: {
    color: "#FFFFFF",
    position: "absolute",
    top: " 50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:hover": {
      color: "#888888",
      cursor: "pointer",
    },
  },
  loading: {
    position: "absolute",
    top: " 50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  loadingIcon: {
    color: "#FFF",
  },
});

export { styles };
export default styles;
