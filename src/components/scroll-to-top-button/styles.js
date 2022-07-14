const styles = () => ({
  button: {
    position: "fixed",
    bottom: 48,
    right: 16,
    zIndex: "1000",
    backgroundColor: "#000000",
    border: "1px solid #FFFFFF",
    color: "#FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      backgroundColor: "#000000",
      borderColor: "#888888",
      color: "#888888",
    },
  },
  text: {
    color: "#FFFFFF",
  },
});

export { styles };
export default styles;
