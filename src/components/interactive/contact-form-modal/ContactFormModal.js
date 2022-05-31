import React from "react";

import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

import styles from "./styles";
import { ModalHeader, ContactForm } from "./components";
import withContactFormModalProps from "./withContactFormModalProps";

const ContactFormModal = ({ open, handleClose, handleSubmit, status }) => {
  const classes = styles();

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Grid container direction="column" className={classes.container}>
        <ModalHeader title="Contact" onClose={handleClose} />

        <ContactForm handleSubmit={handleSubmit} status={status} />
      </Grid>
    </Modal>
  );
};

export { ContactFormModal };
export default withContactFormModalProps(ContactFormModal);
