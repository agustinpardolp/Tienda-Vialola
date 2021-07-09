import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

export const StyledMain = styled.div `
  @media ${DEVICES_MAX_WIDTH.laptop} {
    height: 100%;
  }
`;