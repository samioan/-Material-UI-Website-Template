import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  form: {
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 16px",
  },
  textField: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF",
      },
      "&:hover fieldset": {
        borderColor: "#888888",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#888888",
      },
    },
    "& label": {
      color: "#888888 !important",
    },
    "& input": {
      color: "#FFFFFF",
    },
    marginBottom: 8,
  },
  textArea: {
    width: "100%",
    height: 150,
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
    borderRadius: 4,
    color: "#FFFFFF",
    resize: "none",
    padding: "18.5px 14px",
    boxSizing: "border-box",
    "&:hover": {
      borderColor: "#888888",
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: "#888888",
    },
    "&::placeholder": {
      color: "#888888",
    },
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 24,
    display: "flex",
    justifyContent: "end",
    width: "100%",
  },
  button: {
    width: 200,
    color: "#FFFFFF",
    backgroundColor: "#000000",
    border: "1px solid #FFFFFF",
    transition: "all 250ms",
    "&:hover": {
      borderColor: "#888888",
      color: "#888888",
    },
    "&:disabled": {
      borderColor: "#888888",
      color: "#888888",
    },
  },
}));

export { styles };
export default styles;
