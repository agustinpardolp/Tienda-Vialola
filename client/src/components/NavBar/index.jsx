import React, { useContext, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
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
  StyledAdminButton,
} from "./styled-components";
import { lenguageTypes } from "../LenguageWrapper/constants";
import { PATHS } from "../../routes/constants";
import { logoutUser } from "../../redux/login/actions/user-actions";
import { Icon } from "semantic-ui-react";

export function NavBar({ location, history, logoutUser }) {
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
  const handleLogout = (history, pathname) => {
    logoutUser(history, pathname);
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
              />
            </StyledBarContainer>
            <StyledCartMenu>
              {isAdmin ? (
                <StyledAdminMenu>
                  <h2><FormattedMessage id="navbar.admin"/></h2>
                  <Icon
                    name="log out"
                    onClick={() => handleLogout(history, PATHS.home)}
                    size="large"
                  />
                </StyledAdminMenu>
              ) : (
                <>
                  <MenuOptions location={location} path={path} />
                  <MediaInfo />
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
                </>
              )}
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
        handleLogout={handleLogout}
        history={history}
      />
    </>
  );
}
const mapDispatchToProps = {
  logoutUser,
};

export default connect(
  null,
  mapDispatchToProps
)(React.memo(withRouter(NavBar)));
