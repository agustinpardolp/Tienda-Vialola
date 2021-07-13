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
  margin: 8% 8% 0 12%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(1) {
      order: 2;
      margin: 5%;
    }
  }
`;

const StyledImageContainer = styled.div`
  align-items: center;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat left;`};
  background-size: contain;
  display: inline-block;
  justify-content: flex-start;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(2) {
      background-position: center;
      margin-top: 35px;
      height: 50vh;
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
