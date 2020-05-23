import React from "react";
import Modal from "react-awesome-modal";

function ModalError({modalStatus, toggle, modalMsj}) {
  return (
    <Modal visible = {modalStatus} width="400" height="300" effect="fadeInUp" onClickAway={toggle}>
      <div>
        <h2 className = "h2-modal-error">Error</h2>
        <p className = "p-modal-error">{modalMsj}</p>
        <button onClick={toggle} className = "btn-modal-error">

          Close
        </button>
        
      </div>
    </Modal>
  );
}

export default ModalError;
