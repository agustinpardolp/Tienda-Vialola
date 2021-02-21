import React from "react";
import { Button, Modal } from "semantic-ui-react";

function DeleteModal({ title, message, handleConfirm, posResponse, data, dispatch }) {
  const onConfirm = async () => {
    let response = await handleConfirm(data);
    response && posResponse('')
    dispatch({ type: "hide" })
  };
  return (
    <>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <p>{message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => dispatch({ type: "hide" })}>
          No
        </Button>
        <Button positive onClick={() => onConfirm(data)}>
          Yes
        </Button>
      </Modal.Actions>
    </>
  );
}

export default DeleteModal;
