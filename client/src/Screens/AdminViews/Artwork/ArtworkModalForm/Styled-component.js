import styled from "styled-components";
import { Modal, Form, Icon } from "semantic-ui-react";

const StyledFormModal = styled(Modal)`
  height: 70vh !important;
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
export { StyledFormModal, StyledFormInput, StyledIcon, StyledImageLabel };
