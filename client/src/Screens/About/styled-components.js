import { DEVICES_MAX_WIDTH } from "../../constants";
import styled from "styled-components";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const StyledAboutContainer = styled.div`
  background-size: contain;
  width: 100%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpeg") no-repeat left;`};
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
  }
  p {
    display: inline-block;
    font-size: 1.05rem;
    margin-left: 10%;
    text-align: initial;
    line-height: 29px;
    width: 20%;
  }

  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(2) {
      order: 1;
    }
    p {
      display: contents;
    }
  }
`;

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px 0 50px;

  @media ${DEVICES_MAX_WIDTH.laptop} {
    grid-template-columns: 1fr;
  }
`;

const StyledInfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;

  p {
    padding: 120px;
    font-size: 1rem;
    text-align: start;
    font-weight: lighter;
    letter-spacing: 1px;
  }
  @media ${DEVICES_MAX_WIDTH.laptopL} {
    p {
      padding: 50px;
    }
  }

  @media ${DEVICES_MAX_WIDTH.laptop} {
    &:nth-of-type(1) {
      order: 2;
      margin: 5%;
    }
    p {
      padding: 5px;
      font-size: 1rem;
      text-align: start;
      font-weight: lighter;
      letter-spacing: 1px;
    }
  }
`;

export {
  StyledAboutContainer,
  StyledMainContainer,
  StyledInfoContainer
};
