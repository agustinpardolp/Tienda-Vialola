import styled from "styled-components";

const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  & > svg {
    color: var(--mineShaft);
    cursor: pointer;
    font-size: 30px;
    margin: 10px;
  }
`;

export { StyledMediaContainer };
