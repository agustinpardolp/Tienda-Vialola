import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../../../constants";

const StyledHomeContact = styled.p`
  font-size: 2rem;
  margin: 3% 30% 3% 30%;
  font-weight: 100;

  letter-spacing: 3px;
  @media ${DEVICES_MAX_WIDTH.tablet} {
    margin: 3% 10% 3% 10%;
    font-size: 1.5rem;
  }
`;

export { StyledHomeContact };
