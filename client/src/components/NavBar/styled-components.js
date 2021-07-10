import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICES_MIN_WIDTH, DEVICES_MAX_WIDTH } from "../../constants";
import { Icon } from "semantic-ui-react";

const StyledLink = styled(Link)`
  color: ${(props) =>
    props.format ? "var(--codGray)" : "var(--mineShaft) !important"};
  font-size: ${(props) => (props.format ? "19px" : "17px")};
  text-decoration: none;
  
  link:hover {
    color: grey;
    transition: all 0.4s ease 0s;
  }
`;

const NavbarContainer = styled.nav`
  background: ${(props) => props.location && "#ffffff7a"};
  display: grid;
  grid-template-columns: 5fr 10fr;
  grid-template-rows: 1fr;
  height: 15vh;
  padding-bottom: 1%;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: flex;
    align-items: center;
  }
`;
const StyledBrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  padding-right: 0%;
`;

const StyledCartMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: none;
  }
`;

const StyledMenuOptions = styled.ul`
  align-items: center;
  color: var(--mineShaft);
  display: flex;
  justify-content: space-evenly;
  font-size: 20px;
  list-style: none;
  margin: 0;
  padding-top: 6px;
  text-decoration: solid;

  li {
    color: var(--mineShaft);
    margin-left: 40px;
    transition: all 0.4s ease 0s;
  }

  .navbar-button_translation-container {
    display: flex;
    list-style: none;
    li {
      color: var(--primaryFontReverse);
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`;

const StyleMedia = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 25%;
  svg {
    margin-right: 5%;
  }
`;

const StyledBrandLink = styled(Link)`
  color: var(--mineShaft);
  font-size: 40px;
  font-family: var(--fontVar);
  transition: all 0.9s ease 0s;
  display: flex;
  justify-content: flex-end;
  :hover {
    color: "var(--doveGray)";
    letter-spacing: 1px;
    transition: all 0.9s ease 0s;
  }
  img {
    filter: invert(0.3);
    width: 90%;
  }
  text-decoration: none;
`;
const StyledAdminMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  h2 {
    color: dimgrey;
    margin: 0 10px 0 0;
  }
  i {
    cursor: pointer;
  }
`;

const StyledBrand = styled.div`
  display: flex;
  width: 100%;
`;
const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    margin-bottom: 0;
  }
`;
const StyledIcon = styled(Icon)`
  margin-right: 2rem !important;
  @media ${DEVICES_MIN_WIDTH.desktopL} {
    visibility: hidden;
    display: none !important;
  }
  @media ${DEVICES_MIN_WIDTH.desktop} {
    visibility: hidden;
    display: none !important;
  }
  @media ${DEVICES_MIN_WIDTH.laptopL} {
    visibility: hidden;
    display: none !important;
  }
  @media ${DEVICES_MIN_WIDTH.laptop} {
    visibility: hidden;
    display: none !important;
  }
`;

const StyledBarContainer = styled.div`
  display: grid;
  grid-row-gap: 15px;
  @media ${DEVICES_MIN_WIDTH.laptop} {
    display: none;
  }
`;

const StyledTranslateContainer = styled.div`
  align-items: center;
  display: flex;
  img {
    width: 20px;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: flex;
    justify-content: flex-start;
    img {
      margin-left: 3px;
    }
  }
`;

const StyledAdminButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin: 0 10px 5px 0;
  a {
    color: transparent;
    cursor: pointer;
    &:hover {
      color: transparent;
    }
  }
`;

export {
  NavbarContainer,
  StyledBrand,
  StyledBrandLink,
  StyleMedia,
  StyledMenuOptions,
  StyledLink,
  StyledCartMenu,
  StyledIcon,
  StyledBrandContainer,
  StyledAdminMenu,
  Container,
  StyledBarContainer,
  StyledTranslateContainer,
  StyledAdminButton,
};
