import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

const ContactForm = ({ handleSubmit, status }) => {
  const classes = styles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="outlined"
        required
        classes={{
          root: classes.textField,
        }}
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        required
        classes={{
          root: classes.textField,
        }}
      />

      <textarea
        id="message"
        placeholder="Message*"
        required
        className={classes.textArea}
      />

      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          type="submit"
          disabled={status === "Sending..."}
          className={classes.button}
        >
          {status}
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };
export default ContactForm;
