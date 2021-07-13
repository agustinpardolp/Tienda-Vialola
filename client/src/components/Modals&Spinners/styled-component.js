import styled from "styled-components";
import { Modal, Form, Icon, Button} from "semantic-ui-react";

const StyledFormModal = styled(Modal)`
  height:auto !important;
  overflow-y: scroll;
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
  margin-bottom: 1.5rem;
  position: relative;
  width: 10rem;
  height: 12rem;  
  img {
    width: 100%;
    padding-bottom: 2rem;
    height: 15rem !important;
  }
  .ui .small .image {
    width: 150px;
    height: 180px;
  }
`;
const StyledButtonContainer = styled(Button.Group)`
  align-self: flex-end;
  height: 50%;
`;

const SpinneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

export { StyledFormModal, StyledFormInput, StyledIcon, StyledImageLabel, StyledButtonContainer, SpinneContainer };
