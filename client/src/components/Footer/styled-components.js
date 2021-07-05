import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledFooter = styled.div`
  align-items: center;
  bottom: 0;
  background-color: var(--wildSand);
  display: grid;
  grid-row-gap: 1rem;
  overflow: hidden;
  padding: 20px 30% 20px 30%;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    padding: 20px 20% 20px 20%;
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    padding: 20px 5% 20px 5%;
  }
`;

const StyledFooterContainer = styled.div`
  margin-top: 20px;
  .footer_copyrigth {
  }
  .footer_developed {
    font-style: italic;
  }
`;

export { StyledFooter, StyledFooterContainer };
