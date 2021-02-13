import styled from "styled-components";

const StyledButton = styled.button`
  width: 15rem;
  color:"var(--darkGrey)";
  margin:1rem;
  height: 1rem;
  border-radius: 1.3rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border: none;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.fontColor ? props.fontColor : "var(--primary)")};
  font-size: 1rem;
  padding: 1.2rem;
  transition: 1s;
  outline: none;
  &&:hover {
    /* opacity:0.5; */
    color:"var(--inactiveColor)";
    background:var(--inactiveColor);
    transition: 1s;
  }
`;

export { StyledButton };
