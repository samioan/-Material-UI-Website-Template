const styles = () => ({
  container: {
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "8px",
    minHeight: 64,
  },
  tooltip: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
  },
  arrow: {
    color: "#333333",
  },
  iconButton: {
    color: "#FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
    "& svg": {
      width: 24,
      height: 24,
    },
  },
});

export { styles };
export default styles;
