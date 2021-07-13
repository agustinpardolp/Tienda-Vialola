import { DEVICES_MAX_WIDTH } from "../../constants";
import styled from "styled-components";

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
      height: 50vh;
      order: 1;
    }
  }
`;

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 30px;

  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: 1fr;
  }
`;

const StyledInfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: lighter;
    letter-spacing: 1px;
    padding: 120px;
    text-align: start;
  }
  @media ${DEVICES_MAX_WIDTH.laptopL} {
    p {
      padding: 50px;
    }
  }

  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(1) {
      margin: 5%;
      order: 2;
    }
    p {
      font-size: 1rem;
      font-weight: lighter;
      letter-spacing: 1px;
      padding: 5px;
      text-align: start;
    }
  }
`;

export { StyledImageContainer, StyledMainContainer, StyledInfoContainer };
