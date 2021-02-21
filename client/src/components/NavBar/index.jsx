import React from "react";
import { withRouter } from "react-router-dom";

import { UpperTranslate } from "../ImageSlider/animations";
import SubMenu from "../SubMenu";

import BrandInfo from "./BrandInfo";
import MenuOptions from "./MenuOptions";
import MediaInfo from "./MediaInfo";
import {
  NavbarContainer,
  StyledCartMenu,
  StyledIcon,
  StyledAdminMenu,
} from "./styled-components";

export function NavBar({ location }) {
  const { pathname } = location;
  const path = pathname && pathname.split("/")[1];
  const isAdmin = path.includes("admin");
  const [visible, setVisible] = React.useState(false);

  const toogleSubMenu = () => {
    setVisible(!visible);
  };
  return (
    <>
      <NavbarContainer location={pathname.includes("about")} isAdmin={isAdmin}>
        <UpperTranslate duration="2s" delay="0.5s">
          <BrandInfo location={location} />
          <StyledIcon
            name="bars"
            size="large"
            onClick={toogleSubMenu}
            visible={false}
          />
          <StyledCartMenu>
            {isAdmin ? (
              <StyledAdminMenu>
                <h2>Panel Administrador</h2>
              </StyledAdminMenu>
            ) : (
              <>
                <MenuOptions location={location} path={path} />
                <MediaInfo />
              </>
            )}
          </StyledCartMenu>
        </UpperTranslate>
      </NavbarContainer>
      <SubMenu visible={visible} path={path} isAdmin={isAdmin} />
    </>
  );
}

export default React.memo(withRouter(NavBar));
