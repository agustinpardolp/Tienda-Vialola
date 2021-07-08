import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import SubMenu from "./components/SubMenu";
import { UpperTranslate } from "../ImageSlider/animations";
import { Context } from "../LenguageWrapper";
import BrandInfo from "./components/BrandInfo";
import MenuOptions from "./components/MenuOptions";
import MediaInfo from "./components/MediaInfo";
import {
  NavbarContainer,
  StyledCartMenu,
  StyledIcon,
  StyledAdminMenu,
  Container,
  StyledBarContainer,
  StyledTranslateContainer,
} from "./styled-components";
import { lenguageTypes } from "../LenguageWrapper/constants";

export function NavBar({ location }) {
  const context = useContext(Context);
  const [visible, setVisible] = React.useState(false);
  const { pathname } = location;
  const path = pathname && pathname.split("/")[1];
  const isAdmin = path.includes("admin");

  const toogleSubMenu = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const handleChangeLanguage = (e) => {
    context.changeLanguage(e);
  };
  return (
    <>
      <UpperTranslate duration="2s" delay="0.5s">
        <Container>
          <NavbarContainer
            location={pathname.includes("about")}
            isAdmin={isAdmin}
          >
            <BrandInfo location={location} />
            <StyledBarContainer>
              <StyledIcon
                name="bars"
                size="large"
                onClick={toogleSubMenu}
                visible={false}
              />
            </StyledBarContainer>
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
              <StyledTranslateContainer>
                <img
                  src={`/images/logo/${
                    context.locale === lenguageTypes.en_es
                      ? "britain.png"
                      : "spain.png"
                  }`}
                  onClick={handleChangeLanguage}
                />
              </StyledTranslateContainer>
            </StyledCartMenu>
          </NavbarContainer>
        </Container>
      </UpperTranslate>
      <SubMenu
        visible={visible}
        path={path}
        isAdmin={isAdmin}
        handleChangeLanguage={handleChangeLanguage}
        locale={context.locale}
      />
    </>
  );
}

export default React.memo(withRouter(NavBar));
