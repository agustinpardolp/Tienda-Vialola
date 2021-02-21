import React, { useState } from "react";
import styled from "styled-components";

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;



export default function modalViewer(
  children,
  backButtonText,
  confirmButtonText,
  confirmCallback,
  confirm,
  width,
  height,
  show,
  close
) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProssesingCallaback, setIsProcessingCallBack] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = async (confirmCallback) => {
    setIsProcessingCallBack(true);
    await confirmCallback();
    setIsProcessingCallBack(false);
    toggleIsOpen();
  };

  return (
    <>
      {(isOpen || show) && (
        <StyledModalContainer>
          <StyledBackButton onClick={close ? close : toggleIsOpen}>
            {backButtonText}
          </StyledBackButton>
          {children}
        </StyledModalContainer>
      )}
    </>
  );
}
