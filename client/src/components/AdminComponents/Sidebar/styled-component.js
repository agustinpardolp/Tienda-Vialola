import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../../constants";

const StyledSidebar = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  align-items: flex-start;
  justify-content: center;
  color: dimgrey;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    height: 7vh;
  }
  ul {
    display: grid;
    grid-template-rows: 5rem 5rem 5rem 5rem;
    grid-row-gap: 1rem;
    justify-content: center;
    list-style: none;
    align-items: flex-start;
    margin-top: 5rem;
    font-size: 1.5rem;
    color: white;
    text-align: justify;
    @media ${DEVICES_MAX_WIDTH.tablet} {
      display: flex;
      height: 7vh;
      margin: 10px;
      li {
        margin: 10px;
      }
    }
  }
`;

const StyledLink = styled.li`
  color: ${(props) =>
    props.format ? "var(--mineShaft)" : "var(--mineShaft) !important"};
  font-size: ${(props) => (props.format ? "22px" : "17px")};
  cursor: pointer;
  link:hover {
    color: grey;
  }
`;

export { StyledSidebar, StyledLink };
