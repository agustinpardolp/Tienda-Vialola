import { DEVICES_MAX_WIDTH } from "../../constants";
import styled from "styled-components";

const StyledAboutContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
  }
  p {
    display: inline-block;
    width: 20%;
    font-size: 1.05rem;
    margin-left: 10%;
    text-align: initial;
    line-height: 29px;
  }

  @media ${DEVICES_MAX_WIDTH.tablet} {
    p {
      display: contents;
    }
  }
`;

export { StyledAboutContainer };
