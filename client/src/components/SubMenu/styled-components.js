import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICES_MIN_WIDTH } from "../../constants";

const StyledSubMenu = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none !important")};
  display: block;
  margin-top: 8px;
  width: 100%;
  ul {
    list-style: none;
    padding: 15px;
    li {
      margin: 5px;
    }
  }

  @media ${DEVICES_MIN_WIDTH.laptop} {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.format ? "var(--mineShaft)" : "var(--mineShaft) !important"};
  font-size: ${(props) => (props.format ? "22px" : "17px")};

  link:hover {
    color: grey;
    transition: all 0.4s ease 0s;
  }
`;

export { StyledSubMenu, StyledLink };
