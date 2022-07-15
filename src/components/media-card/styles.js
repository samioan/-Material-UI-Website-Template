const styles = () => ({
  card: {
    backgroundColor: "transparent",
    color: "transparent",
    boxShadow: "none",
  },
  mediaContainer: {
    overflow: "hidden",
    position: "relative",
    width: "100%",

    "&:hover": {
      "& div:first-child": {
        transform: "scale(1.1)",
      },
      "& div:last-child": {
        opacity: 1,
      },
    },
  },
  artMediaContainer: {
    overflow: "hidden",
    cursor: "pointer",
  },
});

export { styles };
export default styles;
