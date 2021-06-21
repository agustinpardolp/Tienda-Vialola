import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICES_MIN_WIDTH, DEVICES_MAX_WIDTH } from "../../constants";
import { Icon } from "semantic-ui-react";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.format ? "var(--darkGrey)" : "var(--darkGrey) !important"};
  font-size: ${(props) => (props.format ? "22px" : "17px")};

  link:hover {
    color: grey;
    transition: all 0.4s ease 0s;
  }
`;

const NavbarContainer = styled.nav`
  background: ${(props) => props.location && "#ffffff7a"};
  display: grid;
  grid-template-columns: 6fr 5fr 10fr 1fr;
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
  color: var(--darkGrey);
  padding-top: 6px;
  text-decoration: solid;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  margin: 0;
  /* transform: translate(100px, 0);
  transform: translate(-100px, 0);
  -webkit-transition: all 2s ease-in-out; */

  li {
    margin-left: 40px;
    color: var(--darkGrey);
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
  display: flex;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-right: 5%;
  }
`;

const StyledBrandLink = styled(Link)`
  color: var(--darkGrey);
  font-size: 40px;
  font-family: var(--fontVar);
  transition: all 0.9s ease 0s;
  display: flex;
  justify-content: flex-end;
  :hover {
    letter-spacing: 1px;
    transition: all 0.9s ease 0s;
    color: "var(--lightGrey)";
  }
  img {
    width: 90%;
    filter: invert(0.3);
  }
  text-decoration: none;
`;
const StyledAdminMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h2 {
    color: dimgrey;
  }
`;

const StyledBrand = styled.div`
  width: 100%;
  display: flex;
`;
const Container = styled.div`

`;
const StyledIcon = styled(Icon)`
  margin-right: 2rem !important;
  @media ${DEVICES_MIN_WIDTH.desktopL} {
    visibility: hidden;
  }
  @media ${DEVICES_MIN_WIDTH.desktop} {
    visibility: hidden;
  }
  @media ${DEVICES_MIN_WIDTH.laptopL} {
    visibility: hidden;
  }
  @media ${DEVICES_MIN_WIDTH.laptop} {
    visibility: hidden;
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
  Container
};
