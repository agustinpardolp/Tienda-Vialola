import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  height: 20vh;
  bottom: 0;
  width: 100%;
  background-color: var(--footerBackground);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
const StyledFooterContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr;
`;

const StyledInfo = styled.div`
  p {
    color: var(--footerText);
    font-size: 1.1rem;
  }
`;

const StyledLi = styled.li`
  color: var(--lightGrey);
  font-size: 1.2rem;
  list-style: none;
  padding: 5% 0 5% 0;
`;

const StyledLiContainer = styled.div`
  height: 100%;
  margin: auto;
  padding-top: 4%;
  text-align: justify;
`;

const StyledLabel = styled.label`
  color: var(--lightGrey);
  font-size: 1.1rem;
  font-weight: 500;
`;

export {
  StyledFooter,
  StyledSpan,
  StyledLink,
  StyledFooterContainer,
  StyledInfo,
  StyledLi,
  StyledLiContainer,
  StyledLabel,
};
