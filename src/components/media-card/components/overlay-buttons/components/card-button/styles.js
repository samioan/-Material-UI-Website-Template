const styles = () => ({
  iconButton: {
    color: "#FFFFFF",
    width: 32,
    height: 32,
    "& svg": {
      width: 32,
      height: 32,
    },
    transition: "all 250ms",
    "&:hover": {
      color: "#888888",
    },
  },
  tooltip: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
  },
  arrow: {
    color: "#333333",
  },
});

export { styles };
export default styles;
