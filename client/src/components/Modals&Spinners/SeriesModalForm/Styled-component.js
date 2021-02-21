import { Modal, Form, Icon, Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledFormModal = styled(Modal)`
  height: 45vh !important;
  position: relative !important;
`;
const StyledFormInput = styled(Form.Input)`
  display: none;
`;
const StyledIcon = styled(Icon)`
  color: white;
  position: absolute;
  right: 0;
  z-index: 10;
`;
const StyledImageLabel = styled.label`
  height: 10rem;
  margin-bottom: 1.5rem;
  position: relative;
  width: 12rem;
  img {
    height: 100%;
    width: 100%;
  }
  .ui .small .image {
    height: 100%;
  }
`;
const StyledButtonContainer = styled(Button.Group)`
  align-self: flex-end;
  height: 50%;
`;
export {
  StyledFormModal,
  StyledFormInput,
  StyledIcon,
  StyledImageLabel,
  StyledButtonContainer,
};
