import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { UpperTranslate } from "../ImageSlider/style";
import BrandInfo from "./BrandInfo";
import MenuOptions from "./MenuOptions";
import MediaInfo from "./MediaInfo";

const NavbarContainer = styled.nav`
  background: ${(props) => (props.shop ? "#37bfac52" : "#ffffff7a")};
  padding-bottom: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16%;
  width: 100%;
  padding-right: 0%;
`;

const MenuCart = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  margin-right: 2%;
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

const StyledCartContainer = styled.div`
  .cart {
    position: relative;
  }
  .circle {
    position: absolute;
    font-size: 0.7rem;
    color: red;
  }
  span {
    position: absolute;
    bottom: 4rem;
    right: -1rem;
  }
`;
export function NavBar({ location, productsToCart }) {
  const { pathname } = location;
  const path = pathname && pathname.split("/")[1];
  return (
    <NavbarContainer location={location ? location.pathname : null}>
      <UpperTranslate duration="2s" delay="0.5s">
        <BrandInfo location={location} />
        <MenuCart>
          <MenuOptions location={location} path={path} />
          <MediaInfo />
        </MenuCart>
      </UpperTranslate>
    </NavbarContainer>
  );
}
const mapStateToProps = (state, ownProps) => {
  const {
    cart: { data: productsToCart },
  } = state;

  return {
    productsToCart,
  };
};

export default connect(mapStateToProps, null)(React.memo(withRouter(NavBar)));
