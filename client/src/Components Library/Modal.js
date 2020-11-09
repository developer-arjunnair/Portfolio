import React from "react";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ handleCancel, footer, children, heading, show }) => {
  return (
    <Modal
      show={show}
      onHide={handleCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default CustomModal;
