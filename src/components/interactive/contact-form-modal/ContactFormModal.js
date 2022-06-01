import React from "react";

import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

import styles from "./styles";
import { ModalHeader, ContactForm } from "./components";
import withContactFormModalProps from "./withContactFormModalProps";

const ContactFormModal = ({
  open,
  handleClose,
  handleOnSubmit,
  handleOnChange,
  status,
  inputs,
  label,
  setStatus,
}) => {
  const classes = styles();

  return (
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
};

export { ContactFormModal };
export default withContactFormModalProps(ContactFormModal);
