import styled from "styled-components";

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  .btn-groups {
    width: 25%;
  }
  & button:first-child {
    margin-right: 2%;
  }
`;

export { StyledButtonGroup };
