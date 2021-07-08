import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../../../constants";

const StyledHomeText = styled.p`
  font-size: 3rem;
  margin: 4% 20% 3% 20%;
  font-weight: 200;
  letter-spacing: 1px;
  @media ${DEVICES_MAX_WIDTH.tablet} {
    font-size: 2rem;
    margin: 10% 5%;
    font-weight: 200;
  }
`;

export { StyledHomeText };
