import React from "react";
import { Button, Modal } from "semantic-ui-react";

function DeleteModal({ title, message, handleConfirm, data, dispatch }) {
  console.log(title, message, handleConfirm, data, dispatch);
  const onConfirm = async () => {
    let response = await handleConfirm(data);
    debugger;
    response && dispatch({ type: "hide" })
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
        <Button positive onClick={() => handleConfirm(data)}>
          Yes
        </Button>
      </Modal.Actions>
    </>
  );
}

export default DeleteModal;
