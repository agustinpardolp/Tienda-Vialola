import styled from "styled-components";
import { Button } from "semantic-ui-react";

const StyledButton = styled.button`
  align-items: center;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--white)"};
  border: none;
  border-radius: 1.3rem;
  color: ${(props) => (props.fontColor ? props.fontColor : "var(--mineShaft)")};
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
  display: flex;
  font-size: 1rem;
  height: 1rem;
  justify-content: center;
  justify-self: center;
  margin: 1rem;
  outline: none;
  padding: 1.2rem;
  transition: 1s;
  width: 5rem;
  &&:hover {
    background: ${(props) => (props.cursor ? "none" : "var(--wildSand)")};
    color: "var(--wildSand)";
    transition: 1s;
  }
`;

export { StyledButton };
