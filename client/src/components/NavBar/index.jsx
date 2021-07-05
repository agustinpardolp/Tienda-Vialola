import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import SubMenu from "../SubMenu";
import { UpperTranslate } from "../ImageSlider/animations";
import { Context } from "../LenguageWrapper";
import BrandInfo from "./BrandInfo";
import MenuOptions from "./MenuOptions";
import MediaInfo from "./MediaInfo";
import {
  NavbarContainer,
  StyledCartMenu,
  StyledIcon,
  StyledAdminMenu,
  Container,
} from "./styled-components";

export function NavBar({ location }) {
  const context = useContext(Context);
  const [visible, setVisible] = React.useState(false);
  const { pathname } = location;
  const path = pathname && pathname.split("/")[1];
  const isAdmin = path.includes("admin");

  const toogleSubMenu = () => {
    setVisible(!visible);
  };

  const handleChangeLanguage = (e)=>{
    context.changeLanguage(e)
  }
  return (
    <>
      <UpperTranslate duration="2s" delay="0.5s" >
        <Container>
          <NavbarContainer
            location={pathname.includes("about")}
            isAdmin={isAdmin}
          >
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
            <FontAwesomeIcon
              icon={faLanguage}
              size="2x"
              className="cart"
              style={{ fontSize: "20px", color: "var(--mineShaft)" }}
              onClick={handleChangeLanguage}
            />
          </NavbarContainer>
        </Container>
      </UpperTranslate>
      <SubMenu visible={visible} path={path} isAdmin={isAdmin} />
    </>
  );
}

export default React.memo(withRouter(NavBar));
