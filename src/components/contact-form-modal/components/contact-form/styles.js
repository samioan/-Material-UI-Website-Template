import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(({ palette }) => ({
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
        borderColor: "rgba(63, 81, 181, 0.5)",
      },
      "&:hover fieldset": {
        borderColor: "#3f51b5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f51b5",
      },
    },
    "& label": {
      color: palette.grey[600],
    },
    "& input": {
      color: palette.grey[50],
    },
    marginBottom: 8,
  },
  textArea: {
    width: "100%",
    height: 150,
    backgroundColor: "transparent",
    borderColor: "rgba(63, 81, 181, 0.5)",
    borderRadius: 4,
    color: palette.grey[50],
    resize: "none",
    padding: "18.5px 14px",
    boxSizing: "border-box",
    "&:focus-visible": {
      outline: "none",
      borderColor: "#3f51b5",
    },
    "&::placeholder": {
      color: palette.grey[600],
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
    "&:disabled": {
      borderColor: "#3f51b5",
      color: "#3f51b5",
    },
  },
}));

export { styles };
export default styles;
