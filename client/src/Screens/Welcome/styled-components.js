/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWelcomeContainer = styled.div`
  background-size: cover;
  height: 100vh;
  width: 100%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat fixed center;`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: ${(props) => `${props.pageTransition}`};
  text-align: center;
  transition-delay: 300ms;
`;
const StyledWelcomeButton = styled(Link)`
  position: absolute;
  color: var(--mainColorFont);
  font-size: 1.5rem;
  bottom: 15%;
  justify-self: center;
`;


export { StyledWelcomeContainer,  StyledWelcomeButton };
