import styled from "styled-components";
import { Modal, Form, Icon, Button} from "semantic-ui-react";

const StyledFormModal = styled(Modal)`
  height: ${(props)=> props.isSmall? "20vh !important": "85vh !important"};
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
export { StyledFormModal, StyledFormInput, StyledIcon, StyledImageLabel, StyledButtonContainer };
