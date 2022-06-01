import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

const ContactForm = ({ onSubmit, onChange, disabled, inputs, label }) => {
  const classes = styles();

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="outlined"
        value={inputs.name}
        onChange={onChange}
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
        value={inputs.email}
        onChange={onChange}
        required
        classes={{
          root: classes.textField,
        }}
      />

      <textarea
        id="message"
        placeholder="Message*"
        value={inputs.message}
        onChange={onChange}
        required
        className={classes.textArea}
      />

      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          type="submit"
          disabled={disabled}
          className={classes.button}
        >
          {label}
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };
export default ContactForm;
