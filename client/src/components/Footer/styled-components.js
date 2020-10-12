import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  height: 7vh;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  overflow: hidden;
  display: grid;
  grid-template-columns: 54% 46%;
  align-items: center;
`;

const StyledSpan = styled.span`
  text-align: end;
  color: var(--darkGrey);
`;

const StyledLink = styled(Link)`
  color: var(--darkGrey);
  text-decoration: none;
  font-size: 20px;
  text-align: end;
  margin-right: 22%;
`;

export { StyledFooter, StyledSpan, StyledLink };
