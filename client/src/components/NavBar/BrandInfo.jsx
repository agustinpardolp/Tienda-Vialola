import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UpperTranslate } from "../ImageSlider/style";

const NavbarContainer = styled.nav`
  padding-bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12%;
  width: 100%;
  padding-right: 0%;
`;

const HomeLink = styled(Link)`
  color: var(--darkGrey) !important;
  font-size: 40px;
  font-family: var(--fontVar);
  transition: all 0.9s ease 0s;
  display: flex;
  justify-content: flex-end;
  :hover {
    letter-spacing: 1px;
    transition: all 0.9s ease 0s;
    color: "var(--lightGrey)" !important;
  }
  img {
    width: 64%;
    filter: invert(0.3);
  }
  text-decoration: none !important;
`;

const Home = styled.div`
  width: 37%;
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

const BrandInfo = ({ location }) => {
  const { pathname } = location;
  const path = pathname && pathname.split("/")[1];
  return (
    <NavbarContainer location={location ? location.pathname : null}>
      <UpperTranslate duration="2s" delay="0.5s">
        <Home>
          {location.pathname === "/home" ? (
            <HomeLink to="/home" location={location.pathname}>
              <img src="/images/logo/FIRMA2.png" alt="" />
            </HomeLink>
          ) : (
            <HomeLink to="/home" location={location.pathname}>
              <img src="/images/logo/FIRMA2.png" alt="" />
            </HomeLink>
          )}
        </Home>
      </UpperTranslate>
    </NavbarContainer>
    //  </FadeIn>
  );
};

export default React.memo(BrandInfo);
