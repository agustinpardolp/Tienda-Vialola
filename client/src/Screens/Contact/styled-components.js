import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: 1fr;
  }
`;

const StyledForm = styled.div`
  margin: 10% 10% 0 15%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(1) {
      order: 2;
      margin: 5%;
    }
  }
`;

const StyledImageContainer = styled.div`
  background-size: cover;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat center`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100vh;
  text-align: center;
  width: 100%;
  z-index: -1;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(2) {
      order: 1;
    }
  }
`;

const StyledTitle = styled.p`
  color: var(--gray);
  padding: 0 10%;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  StyledImageContainer,
  StyledMainContainer,
  StyledForm,
  StyledTitle,
  StyledButtonContainer,
};
