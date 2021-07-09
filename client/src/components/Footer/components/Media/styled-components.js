import styled from "styled-components";

const StyledMediaContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  & > svg {
    color: var(--mineShaft);
    cursor: pointer;
    font-size: ${(props) => (props.size ? props.size : "30px")};
    margin: 10px;
  }
`;

export { StyledMediaContainer };
