import styled from "styled-components";

const StyledDividerContainer = styled.div`
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  .divider {
    display: flex;
    width: 80%;
  }
`;
const StyledSubtitleContainer = styled.div`
  ${(props) => props.isLinked && "width: 25vw"};
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 1.6rem;
    font-weight: 500;
  }
  & a {
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 1%;
    text-transform: lowercase;
  }
`;

export { StyledDividerContainer, StyledSubtitleContainer };
