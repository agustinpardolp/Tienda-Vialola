import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { UpperTranslate } from "../ImageSlider/style";
import { NAVBAR } from "../../constants";

const NavbarContainer = styled.nav`
  background: ${props=>props.shop?"#37bfac52":"#ffffff7a"};
  padding-bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16%;
  width: 100%;
  padding-right: 0%;
`;

const MenuTitle = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// display: ${props => (props.location === "/home" ? "none" : "visible")};

const HomeLink = styled(Link)`
  color: var(--darkGrey) !important;
  font-size: 40px;
  font-family: var(--fontVar);
  transition: all 0.9s ease 0s;
  display: flex;
  justify-content: center;
  :hover {
    letter-spacing: 1px;
    transition: all 0.9s ease 0s;
    color: "var(--lightGrey)" !important;
  }
  img {
    width: 64%;
    filter: invert(0.3);
    /* filter:brightness(0.25) */
  }
  text-decoration: none !important;
`;

const ShowMenu = styled.ul`
  color: var(--darkGrey);
  padding-top: 6px;
  text-decoration: solid;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  margin: 0 !important;
  transform: translate(100px, 0);
  transform: translate(-100px, 0);
  -webkit-transition: all 2s ease-in-out;

  li {
    margin-left: 40px;
    color: var(--darkGrey);
    transition: all 0.4s ease 0s;
  }
`;
const Home = styled.div`
  width: 37%;
  /* margin-left: ${(props) => (props.location == "/home" ? "0" : "3%")}; */
  display: flex;
  height: ${(props) => (props.location == "/home" ? "25%" : "5%")};
`;
const MenuCart = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-right: 2%;
`;
const LinkStyled = styled(Link)`
  text-decoration: none !important;
  color: ${(props) =>
    props.format ? "var(--darkGrey)" : "var(--darkGrey) !important"};
  font-size: ${(props) => (props.format ? "22px" : "17px")};

  link:hover {
    color: grey !important;
    transition: all 0.4s ease 0s;
  }
`;
const StyleMedia = styled.div`
  display: flex;
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SubMenu = styled.div`
  list-style: none;
`;
export function NavBar(props) {
  const { pathname } = props.location;
  const path = pathname && pathname.split("/")[1];
  return (
    <NavbarContainer location={props ? props.location.pathname : null}>
      <UpperTranslate duration="2s" delay="0.5s">
        <Home>
          {props.location.pathname === "/home" ? (
            <HomeLink to="/home" location={props.location.pathname}>
              <img src="/images/logo/FIRMA1.png" alt="" />
              {/* {NAVBAR.ARTIST.NAME} */}
            </HomeLink>
          ) : (
            <HomeLink to="/home" location={props.location.pathname}>
              <img src="/images/logo/FIRMA1.png" alt="" />
            </HomeLink>
          )}
        </Home>
        <MenuCart>
          <ShowMenu location={props.location.pathname}>
                {NAVBAR.OPTIONS.map((option) => {
                  return (
                    <li key={option.id}>
                      <LinkStyled
                        to={option.path}
                        format={
                          option.NAME.toLowerCase() === path
                            ? "true"
                            : undefined
                        }
                      >
                        {option.NAME}
                      </LinkStyled>
                    </li>
                  );
                })}
            <li>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="1x"
                  className="cart"
                  style={{ fontSize: "20px", color: "var(--darkGrey)" }}
                />
              </Link>
            </li>
          </ShowMenu>

          {/* <MenuTitle location={props.location.pathname}> */}
          <StyleMedia>
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="cart"
                style={{ fontSize: "20px", color: "var(--darkGrey)" }}
              />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="cart"
                style={{ fontSize: "20px", color: "var(--darkGrey)" }}
              />
            </Link>
            <Link to={"/"}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="cart"
                style={{ fontSize: "20px", color: "var(--darkGrey)" }}
              />
            </Link>
          </StyleMedia>
          {/* </MenuTitle> */}
        </MenuCart>
      </UpperTranslate>
    </NavbarContainer>
    //  </FadeIn>
  );
}

export default React.memo(NavBar);
