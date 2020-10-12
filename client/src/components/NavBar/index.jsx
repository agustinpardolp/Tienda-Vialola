import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { UpperTranslate } from "../ImageSlider/animations";
import BrandInfo from "./BrandInfo";
import MenuOptions from "./MenuOptions";
import MediaInfo from "./MediaInfo";
import SubMenu from "../SubMenu";
import {
  NavbarContainer,
  StyledCartMenu,
  StyledIcon,
} from "./styled-components";

export function NavBar({ location }) {
  const { pathname } = location;
  const path = pathname && pathname.split("/")[1];

  const [visible, setVisible] = React.useState(false);

  const toogleSubMenu = () => {
    setVisible(!visible);
  };
  return (
    <>
      <NavbarContainer location={pathname.includes("about")}>
        <UpperTranslate duration="2s" delay="0.5s">
          <BrandInfo location={location} />
          <StyledIcon
            name="bars"
            size="large"
            onClick={toogleSubMenu}
            visible={false}
          />
          <StyledCartMenu>
            <MenuOptions location={location} path={path} />
            <MediaInfo />
          </StyledCartMenu>
        </UpperTranslate>
      </NavbarContainer>
      <SubMenu visible={visible} path={path} />
    </>
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
