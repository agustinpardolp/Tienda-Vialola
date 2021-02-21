import React,{useContext} from "react";

import { ModalContext } from "../../context/ModalContext";

import { MODALS } from "./modalconstants";
import {StyledFormModal} from "./styled-component";

function BasicModal() {
  let { modalType, modalProps, dispatch } = useContext(ModalContext);
  const ModularModal = MODALS[modalType];

  if (modalType) {
    return (
      <StyledFormModal
        open={modalProps.open}
        onClose={() => dispatch({ type: "hide" })}
        isSmall ={modalType === "DELETE"}
      >
        <ModularModal dispatch={dispatch} {...modalProps} />
      </StyledFormModal>
    );
  } else return null;
}

export default BasicModal;
