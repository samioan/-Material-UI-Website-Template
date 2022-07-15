import React from "react";
import { compose } from "redux";

import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import withStyles from "@material-ui/styles/withStyles";

import styles from "./styles";
import { ModalHeader, ContactForm } from "./components";
import withContactFormModalProps from "./withContactFormModalProps";

const ContactFormModal = ({
  classes,
  open,
  handleClose,
  handleOnSubmit,
  handleOnChange,
  status,
  inputs,
  label,
  setStatus,
}) => (
  <Modal
    className={classes.modal}
    open={open}
    onClose={() => {
      !status.submitting && handleClose();
      !status.submitting &&
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
    }}
  >
    <Grid container direction="column" className={classes.container}>
      <ModalHeader
        title="Contact"
        onClose={() => {
          !status.submitting && handleClose();
          !status.submitting &&
            setStatus({
              submitted: false,
              submitting: false,
              info: { error: false, msg: null },
            });
        }}
      />

      <ContactForm
        onSubmit={handleOnSubmit}
        onChange={handleOnChange}
        inputs={inputs}
        disabled={status.submitting}
        label={label}
      />
    </Grid>
  </Modal>
);

export { ContactFormModal };
export default compose(
  withStyles(styles),
  withContactFormModalProps
)(ContactFormModal);
