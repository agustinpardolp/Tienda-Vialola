import React,{useContext} from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { MODALS } from "./modalconstants";
import { ModalContext } from "../../context/ModalContext";
import {StyledFormModal} from "./styled-component";

function BasicModal() {
  let { modalType, modalProps, dispatch } = useContext(ModalContext);
  const ModularModal = MODALS[modalType];
  if (modalType) {
    return (
      <StyledFormModal
        size={"mini"}
        open={modalProps.open}
        onClose={() => dispatch({ type: "hide" })}
      >
        <ModularModal dispatch={dispatch} {...modalProps} />
      </StyledFormModal>
    );
  } else return null;
}

export default BasicModal;
